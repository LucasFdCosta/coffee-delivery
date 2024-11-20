import backgroundImg from "../../assets/Background.png";
import CoffeeImg from "../../assets/CoffeeDeliveryImage.png";
import { dataSource } from "../../data/coffee";
import { CoffeeCard } from "./components/CoffeeCard";
import { ShopQualityItem } from "./components/ShopQualityItem";
import {
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  ShopQualityContainer,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <img id="background-image" src={backgroundImg} alt="" />
        <section>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ShopQualityContainer>
            <ShopQualityItem
              icon={"shopping-cart"}
              description={"Compra simples e segura"}
            />
            <ShopQualityItem
              icon={"package"}
              description={"Embalagem mantém o café intacto"}
            />
            <ShopQualityItem
              icon={"timer"}
              description={"Entrega rápida e rastreada"}
            />
            <ShopQualityItem
              icon={"coffee"}
              description={"O café chega fresquinho até você"}
            />
          </ShopQualityContainer>
        </section>
        <img
          src={CoffeeImg}
          alt="Um como de café cercado com grãos de café em um fundo em formato de poça amarelo"
        />
      </IntroContainer>
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {dataSource.map(coffee => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  );
}
