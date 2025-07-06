import { NavLink, useLocation } from "react-router-dom";
import DeliveryIllustration from "../../assets/Illustration.png";
import { Icon } from "../../components/Icon";
import type { PaymentInfoFormInputs } from "../Checkout";
import {
  CheckoutSuccessContainer,
  DeliveryInfoContainer,
  EmptyCartContainer,
} from "./styles";

export function Success() {
  const location = useLocation();
  const formData = location.state as PaymentInfoFormInputs;

  function returnPaymentMethod(method: string) {
    switch (method) {
      case "credit-card":
        return "Cartão de crédito";
      case "debit-card":
        return "Cartão de débito";
      case "money":
        return "Dinheiro";
      default:
        return "Método de pagamento desconhecido";
    }
  }

  return (
    <CheckoutSuccessContainer>
      {formData ? (
        <>
          <div>
            <section>
              <h1>Uhu! Pedido confirmado</h1>
              <span>Agora é só aguardar que logo o café chegará até você</span>
            </section>
            <DeliveryInfoContainer>
              <div>
                <Icon icon={"map-pin"} />
                <section>
                  <p>
                    Entrega em{" "}
                    <strong>
                      {formData.street}, {formData.number}
                    </strong>
                  </p>
                  <p>
                    {formData.district} - {formData.city}, {formData.state}
                  </p>
                </section>
              </div>
              <div>
                <Icon icon={"timer"} />
                <section>
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </section>
              </div>
              <div>
                <Icon icon={"dollar-sign"} />
                <section>
                  <p>Pagamento na entrega</p>
                  <strong>{returnPaymentMethod(formData.paymentMethod)}</strong>
                </section>
              </div>
            </DeliveryInfoContainer>
          </div>
          <div>
            <img
              src={DeliveryIllustration}
              alt="Um entregador em uma moto, carregando uma caixa de entrega"
            />
          </div>
        </>
      ) : (
        <EmptyCartContainer>
          <h2>O seu carrinho está vazio</h2>
          <NavLink to={"/"}>
            <button>Retornar à Home</button>
          </NavLink>
        </EmptyCartContainer>
      )}
    </CheckoutSuccessContainer>
  );
}
