import { useState } from "react";

import { 
    HomeContainer, 
    MenuContainer,
    MenuContent
} from "./style";


import { data } from "./CoffeeCard/data";
import { CoffeeCard, CoffeeCardProps } from "./CoffeeCard";
import { useContext } from "react";
import { HeroSection } from "./HeroSection";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";

interface CoffeeOrder {
    id: string;
    type: string;
    amount: number;
}

export function Home() {
    const {coffeeOrderList, setCoffeeOrderList} = useContext(CoffeeOrderContext)
    const [coffeeAmount, setCoffeeAmount] = useState(0);

    function handleNewCoffeeOrder(data: CoffeeCardProps) {
        const newCoffeeOrder: CoffeeOrder = {
            id: String(data.id),
            type: data.title,
            amount: coffeeAmount
        }
        event?.preventDefault();
        setCoffeeOrderList((state) => [...state, newCoffeeOrder])
        console.log(coffeeOrderList)
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
                                    amount={coffeeAmount}
                                /> 
                            )
                        })
                    }
                </MenuContent>
            </MenuContainer> 
        </HomeContainer>
    )
}