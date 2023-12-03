import { 
    HomeContainer, 
    MenuContainer,
    MenuContent
} from "./style";


import { data } from "./CoffeeCard/data";
import { CoffeeCard } from "./CoffeeCard";
import { HeroSection } from "./HeroSection";


export function Home() {
    return (
        <HomeContainer>
            <HeroSection />
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