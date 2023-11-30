import { 
    Feature,
    HeroContainer,
    HeroTitleContainer,
    HeroFeaturesDiv,
    HeroTitleDiv,
    HomeContainer, 
    MenuContainer,
    MenuContent
} from "./style";

import { 
    Clock, 
    Coffee, 
    Package, 
    ShoppingCartSimple 
} from "phosphor-react";

import Background from '../../assets/hero-background.png'
import { data } from "./CoffeeCard/data";
import { CoffeeCard } from "./CoffeeCard";


export function Home() {
    return (
        <HomeContainer>
            <HeroContainer>
                <HeroTitleContainer>
                    <HeroTitleDiv>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </HeroTitleDiv>
                    <HeroFeaturesDiv>
                        <div>
                            <Feature backgroundColor="darkYellow"><ShoppingCartSimple weight="fill" /></Feature>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <Feature backgroundColor="gray"><Package weight="fill" /></Feature>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <Feature backgroundColor="lightYellow"><Clock weight="fill" /></Feature>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <Feature backgroundColor="purple"><Coffee weight="fill" /></Feature>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </HeroFeaturesDiv>
                </HeroTitleContainer>
                <div>
                    <img src={Background} alt="Copo de café com fundo amarelo" />
                </div>
            </HeroContainer>
            <MenuContainer>
                <div>
                    <h2>Nossos cafés</h2>
                </div>
                <MenuContent>
                    {
                        data.map(item => {
                            return (
                                <CoffeeCard 
                                    key={item.id} 
                                    title={item.title} 
                                    description={item.description}
                                    tag={item.tag} 
                                    banner={item.banner}
                                    price={item.price} 
                                /> 
                            )
                        })
                    }
                </MenuContent>
            </MenuContainer> 
        </HomeContainer>
    )
}