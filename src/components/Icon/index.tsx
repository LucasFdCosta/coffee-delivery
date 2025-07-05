import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  MapPin,
  CurrencyDollar,
} from "phosphor-react";
import { Container } from "./styles";

interface ShopQualityItemProps {
  icon:
    | "shopping-cart"
    | "package"
    | "timer"
    | "coffee"
    | "map-pin"
    | "dollar-sign";
}

export function Icon({ icon }: ShopQualityItemProps) {
  return (
    <Container icon={icon}>
      {(() => {
        switch (icon) {
          case "shopping-cart":
            return <ShoppingCart size={32} weight="fill" />;

          case "package":
            return <Package size={32} weight="fill" />;

          case "timer":
            return <Timer size={32} weight="fill" />;

          case "coffee":
            return <Coffee size={32} weight="fill" />;

          case "map-pin":
            return <MapPin size={32} weight="fill" />;

          case "dollar-sign":
            return <CurrencyDollar size={32} weight="fill" />;

          default:
            return null;
        }
      })()}
    </Container>
  );
}
