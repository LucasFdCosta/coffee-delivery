import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { CheckoutPaymentForm } from "./components/CheckoutPaymentForm";
import { CheckoutShoppingCartItemsCard } from "./components/CheckoutShoppingCartItemsCard";
import { CheckoutContainer, CheckoutPaymentFormContainer } from "./styles";

const paymentInfoSchema = z.object({
  zipCode: z.string(),
  city: z.string(),
  state: z.string(),
  district: z.string(),
  street: z.string(),
  number: z.string(),
  addressLineTwo: z.string().optional(),
  paymentMethod: z.enum(["credit-card", "debit-card", "money"]),
});

type PaymentInfoFormInputs = z.infer<typeof paymentInfoSchema>;

export function Checkout() {
  const checkoutForm = useForm<PaymentInfoFormInputs>({
    resolver: zodResolver(paymentInfoSchema),
    defaultValues: {
      paymentMethod: "credit-card",
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmPayment(data: PaymentInfoFormInputs) {
    console.log(data);
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmPayment)}>
        <FormProvider {...checkoutForm}>
          <CheckoutPaymentFormContainer>
            <CheckoutPaymentForm />
            <CheckoutShoppingCartItemsCard />
          </CheckoutPaymentFormContainer>
        </FormProvider>
      </form>
    </CheckoutContainer>
  );
}
