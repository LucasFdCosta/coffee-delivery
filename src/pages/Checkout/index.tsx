import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { CartContext } from "../../contexts/ShoppingCartContext";
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

export type PaymentInfoFormInputs = z.infer<typeof paymentInfoSchema>;

export function Checkout() {
  const { resetCart } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutForm = useForm<PaymentInfoFormInputs>({
    resolver: zodResolver(paymentInfoSchema),
    defaultValues: {
      paymentMethod: "credit-card",
    },
  });

  const { handleSubmit } = checkoutForm;

  function handleConfirmPayment(data: PaymentInfoFormInputs) {
    navigate("/success", { state: data });
    resetCart();
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
