import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/ShoppingCartContext";
import { priceFormatter } from "../../../utils/formatter";
import { CoffeeItem } from "../CoffeeItem";
import {
  CheckoutPaymentShoppingCartItemsCard,
  CoffeeList,
  Container,
  FinishPayment,
  TotalPrice,
} from "./styles";

export function CheckoutShoppingCartItemsCard() {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const { items } = useContext(CartContext);

  const totalItemsPrice = items.reduce(
    (acc, item) => acc + item.coffee.price * item.quantity,
    0
  );
  const deliveryPrice = 3.5;
  const totalPrice = totalItemsPrice + deliveryPrice;
  const totalCartItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container>
      <h6>Cafés selecionados</h6>
      <CheckoutPaymentShoppingCartItemsCard>
        <CoffeeList>
          {items.map(i => {
            return <CoffeeItem key={i.coffee.id} item={i} />;
          })}
        </CoffeeList>
        {totalCartItems > 0 ? (
          <>
            <TotalPrice>
              <div>
                <span>Total de itens</span>
                <span>{priceFormatter.format(totalItemsPrice)}</span>
              </div>

              <div>
                <span>Entrega</span>
                <span>{priceFormatter.format(deliveryPrice)}</span>
              </div>

              <div>
                <strong>Total</strong>
                <strong>{priceFormatter.format(totalPrice)}</strong>
              </div>
            </TotalPrice>
            <FinishPayment
              type="submit"
              disabled={isSubmitting || items.length === 0}
            >
              Confirmar pedido
            </FinishPayment>
          </>
        ) : (
          <>
            <h2>O seu carrinho está vazio</h2>
            <NavLink to={"/"}>
              <FinishPayment type="button">Continuar comprando</FinishPayment>
            </NavLink>
          </>
        )}
      </CheckoutPaymentShoppingCartItemsCard>
    </Container>
  );
}
