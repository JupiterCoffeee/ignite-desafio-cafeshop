import { useContext } from "react";
import { CoffeeOrder, CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";
import { data } from "./CoffeeCard/data";

import { 
    HomeContainer, 
    MenuContainer,
    MenuContent
} from "./style";

import { CoffeeCard, CoffeeCardProps } from "./CoffeeCard";
import { HeroSection } from "./HeroSection";

export function Home() {
    const {
        setCoffeeOrderList,
        coffeeAmount,
        setCoffeeAmount
    } = useContext(CoffeeOrderContext)

    // Function to handle creating a new coffee order 
    function handleNewCoffeeOrder(data: CoffeeCardProps) {
        const newCoffeeOrder: CoffeeOrder = {
            id: String(data.id),
            type: data.title,
            banner: data.banner,
            amount: coffeeAmount,
            price: Number((coffeeAmount * 9.90).toFixed(2))
        }
        setCoffeeOrderList((state) => [...state, newCoffeeOrder])
    }
    
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
                                    id={item.id} 
                                    title={item.title} 
                                    description={item.description}
                                    tag={item.tag} 
                                    banner={item.banner}
                                    price={item.price}
                                    handleNewCoffeeOrder={handleNewCoffeeOrder}
                                    handleCoffeeAmount={setCoffeeAmount} 
                                /> 
                            )
                        })
                    }
                </MenuContent>
            </MenuContainer> 
        </HomeContainer>
    )
}