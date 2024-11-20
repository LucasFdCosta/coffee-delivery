import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/Logo.png";
import { HeaderContainer, ShoppingCartButton, ShoppingInfo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <ShoppingInfo>
        <span>
          <MapPin size={24} weight="fill" />
          Marília, SP
        </span>
        <NavLink to={"/checkout"}>
          <ShoppingCartButton cartItemsNumber={2}>
            <ShoppingCart size={24} weight="fill" />
          </ShoppingCartButton>
        </NavLink>
      </ShoppingInfo>
    </HeaderContainer>
  );
}
