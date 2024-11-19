import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ShopQualityItemContainer } from "./styles";

interface ShopQualityItemProps {
  icon: "shopping-cart" | "package" | "timer" | "coffee";
  description: string;
}

export function ShopQualityItem({ icon, description }: ShopQualityItemProps) {
  return (
    <ShopQualityItemContainer icon={icon}>
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

          default:
            return null;
        }
      })()}
      <span>{description}</span>
    </ShopQualityItemContainer>
  );
}
