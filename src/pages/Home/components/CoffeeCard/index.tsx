import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../../contexts/ShoppingCartContext";
import type { Coffee } from "../../../../data/coffee";
import {
  CartContainer,
  CoffeeCardContainer,
  CoffeeInfo,
  CoffeeTag,
  CoffeeTags,
  PriceContainer,
} from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { items, addItemToCart, subtractItemQuantity } =
    useContext(CartContext);

  const coffeeQuantityInCart =
    items.find(c => c.coffee.id === coffee.id)?.quantity ?? 0;

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <CoffeeTags>
        {coffee.tags.map(tag => {
          return <CoffeeTag key={tag}>{tag}</CoffeeTag>;
        })}
      </CoffeeTags>
      <CoffeeInfo>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <PriceContainer>
          <div>
            <span>R$</span>{" "}
            <strong>{String(coffee.price.toFixed(2)).replace(".", ",")}</strong>
          </div>
          <CartContainer>
            <section>
              <button
                disabled={coffeeQuantityInCart === 0}
                onClick={() => subtractItemQuantity(coffee.id)}
              >
                <Minus size={14} />
              </button>
              <span>{coffeeQuantityInCart}</span>
              <button onClick={() => addItemToCart(coffee.id)}>
                <Plus size={14} />
              </button>
            </section>
            <NavLink to={"/checkout"}>
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </CartContainer>
        </PriceContainer>
      </CoffeeInfo>
    </CoffeeCardContainer>
  );
}
