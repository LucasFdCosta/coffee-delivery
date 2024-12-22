import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  CheckoutCardHeader,
  CheckoutContainer,
  CheckoutPaymentForm,
  CheckoutPaymentFormContainer,
  CheckoutShoppingCartItems,
  FormInputsContainer,
  InputContainer,
  PaymentMethodContainer,
  PaymentMethodOption,
} from "./styles";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "styled-components";

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
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<PaymentInfoFormInputs>({
    resolver: zodResolver(paymentInfoSchema),
    defaultValues: {
      paymentMethod: "credit-card",
    },
  });
  const theme = useTheme();

  function handleConfirmPayment(data: PaymentInfoFormInputs) {
    console.log(data);
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleConfirmPayment)}>
        <CheckoutPaymentFormContainer>
          <CheckoutPaymentForm>
            <h6>Complete seu pedido</h6>
            <section>
              <CheckoutCardHeader>
                <MapPinLine color={theme.yellow} size={22} />
                <div>
                  <p>Endereço de entrega</p>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </CheckoutCardHeader>
              <FormInputsContainer>
                <InputContainer containerWidth="12.5rem">
                  <input
                    type="text"
                    id="zipCode"
                    placeholder="CEP"
                    required
                    {...register("zipCode")}
                  />
                </InputContainer>
                <InputContainer containerWidth="100%">
                  <input
                    type="text"
                    id="street"
                    placeholder="Rua"
                    required
                    {...register("street")}
                  />
                </InputContainer>
                <InputContainer containerWidth="12.5rem">
                  <input
                    type="text"
                    id="number"
                    placeholder="Número"
                    required
                    {...register("number")}
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    id="addressLineTwo"
                    placeholder="Complemento"
                    {...register("addressLineTwo")}
                  />
                  <div>
                    <span>Opcional</span>
                  </div>
                </InputContainer>
                <InputContainer containerWidth="12.5rem">
                  <input
                    type="text"
                    id="district"
                    placeholder="Bairro"
                    required
                    {...register("district")}
                  />
                </InputContainer>
                <InputContainer>
                  <input
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    required
                    {...register("city")}
                  />
                </InputContainer>
                <InputContainer containerWidth="3.75rem">
                  <input
                    type="text"
                    id="state"
                    placeholder="UF"
                    required
                    {...register("state")}
                  />
                </InputContainer>
              </FormInputsContainer>
            </section>
            <section>
              <CheckoutCardHeader>
                <CurrencyDollar color={theme.purple} size={22} />
                <div>
                  <p>Pagamento</p>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </CheckoutCardHeader>
              <Controller
                control={control}
                name="paymentMethod"
                render={({ field }) => {
                  return (
                    <PaymentMethodContainer
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <PaymentMethodOption
                        variant="credit-card"
                        value="credit-card"
                      >
                        <CreditCard size={16} color={theme.purple} />
                        <span>Cartão de crédito</span>
                      </PaymentMethodOption>
                      <PaymentMethodOption
                        variant="debit-card"
                        value="debit-card"
                      >
                        <Bank size={16} color={theme.purple} />
                        <span>Cartão de débito</span>
                      </PaymentMethodOption>
                      <PaymentMethodOption variant="money" value="money">
                        <Money size={16} color={theme.purple} />
                        <span>Dinheiro</span>
                      </PaymentMethodOption>
                    </PaymentMethodContainer>
                  );
                }}
              />
            </section>
          </CheckoutPaymentForm>
          <CheckoutShoppingCartItems>
            <h6>Cafés selecionados</h6>
            <button>send</button>
          </CheckoutShoppingCartItems>
        </CheckoutPaymentFormContainer>
      </form>
    </CheckoutContainer>
  );
}
