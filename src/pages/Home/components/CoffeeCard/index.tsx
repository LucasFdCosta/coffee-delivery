import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import type { Coffee } from "../../../../data/coffee";
import {
  CartContainer,
  CoffeeCardContainer,
  CoffeeTag,
  CoffeeTags,
  PriceContainer,
} from "./styles";

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <CoffeeTags>
        {coffee.tags.map(tag => {
          return <CoffeeTag key={tag}>{tag}</CoffeeTag>;
        })}
      </CoffeeTags>
      <h3>{coffee.title}</h3>
      <p>{coffee.description}</p>
      <PriceContainer>
        <div>
          <span>R$</span>{" "}
          <strong>{String(coffee.price.toFixed(2)).replace(".", ",")}</strong>
        </div>
        <CartContainer>
          <section>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </section>
          <NavLink to={"/checkout"}>
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </CartContainer>
      </PriceContainer>
    </CoffeeCardContainer>
  );
}
