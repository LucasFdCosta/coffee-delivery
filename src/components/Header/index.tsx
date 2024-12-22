import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/Logo.png";
import { CartContext } from "../../contexts/ShoppingCartContext";
import { HeaderContainer, ShoppingCartButton, ShoppingInfo } from "./styles";

export function Header() {
  const { items } = useContext(CartContext);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <ShoppingInfo>
        <span>
          <MapPin size={24} weight="fill" />
          São Paulo, SP
        </span>
        <NavLink to={"/checkout"}>
          <ShoppingCartButton cartItemsNumber={totalItems}>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </ShoppingInfo>
    </HeaderContainer>
  );
}
