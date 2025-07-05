import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import {
  CartContext,
  type ShoppingItem,
} from "../../../../contexts/ShoppingCartContext";
import { priceFormatter } from "../../../../utils/formatter";
import { Container } from "./styles";

interface CoffeeItemProps {
  item: ShoppingItem;
}

export function CoffeeItem({ item }: CoffeeItemProps) {
  const { addItemToCart, subtractItemQuantity, removeItemFromCart } =
    useContext(CartContext);

  return (
    <Container>
      <img src={item.coffee.image} alt={`Um ${item.coffee.title}`} />
      <section>
        <p>{item.coffee.title}</p>
        <div>
          <button
            type="button"
            disabled={item.quantity === 0}
            onClick={() => subtractItemQuantity(item.coffee.id)}
          >
            <Minus size={14} />
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => addItemToCart(item.coffee.id)}>
            <Plus size={14} />
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => removeItemFromCart(item.coffee.id)}
          >
            <Trash size={24} />
            <p>Remover</p>
          </button>
        </div>
      </section>
      <strong>
        {priceFormatter.format(item.coffee.price * item.quantity)}
      </strong>
    </Container>
  );
}
