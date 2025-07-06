import { Icon } from "../../../../components/Icon";
import { ShopQualityItemContainer } from "./styles";

interface ShopQualityItemProps {
  icon:
    | "shopping-cart"
    | "package"
    | "timer"
    | "coffee"
    | "map-pin"
    | "dollar-sign";
  description: string;
}

export function ShopQualityItem({ icon, description }: ShopQualityItemProps) {
  return (
    <ShopQualityItemContainer>
      <Icon icon={icon} />
      <span>{description}</span>
    </ShopQualityItemContainer>
  );
}
