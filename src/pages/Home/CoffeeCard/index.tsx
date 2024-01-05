import { useState, useEffect } from 'react';
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { 
    CheckoutButton,
    CoffeeCardContainer, 
    CoffeeCardPriceDiv, 
    CoffeeCardTextDiv, 
    Counter,
    TagContainer
} from "./style";

// Define the props for the CoffeeCard component
export interface CoffeeCardProps {
    id: string;
    title: string;
    description: string;
    banner: string;
    tag: string[];
    price: number;
    handleNewCoffeeOrder: (data: CoffeeCardProps) => void;
    handleCoffeeAmount: (amount: number) => void;
}

// Optimized CoffeeCard component
export function CoffeeCard({ 
    id, 
    title, 
    description, 
    banner, 
    tag, 
    price, 
    handleNewCoffeeOrder, 
    handleCoffeeAmount 
}: CoffeeCardProps) {
    // State to manage the selected coffee quantity
    const [coffeeAmount, setCoffeeAmount] = useState(0);

    // Function to increase the coffee quantity
    const handleMoreCoffeeAmount = () => {
        setCoffeeAmount((state) => Math.min(10, state + 1));
    };

    // Function to decrease the coffee quantity
    const handleLessCoffeeAmount = () => {
        setCoffeeAmount((state) => Math.max(0, state - 1));
    };

    // Function to create a new coffee order
    const handleCreateNewCoffeeOrder = () => {
        handleNewCoffeeOrder({
            id,
            title,
            description,
            banner,
            tag,
            price,
            handleCoffeeAmount,
            handleNewCoffeeOrder
        });
        setCoffeeAmount(0);
    };

    // Effect to update the coffee quantity when it changes
    useEffect(() => {
        handleCoffeeAmount(coffeeAmount);
    }, [coffeeAmount, handleCoffeeAmount]);

    // Check if the coffee quantity is empty
    const isCoffeeAmountEmpty = coffeeAmount === 0;

    return (
        <CoffeeCardContainer>
            <CoffeeCardTextDiv>
                <div>
                    <img src={banner} alt={`Coffee ${title}`} />
                </div>
                <TagContainer>
                    {/* Render each tag */}
                    {tag.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </TagContainer>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </CoffeeCardTextDiv>
            <CoffeeCardPriceDiv>
                <div>
                    <small>R$</small>
                    <span>{price.toFixed(2)}</span>
                </div>
                <div>
                    <div>
                        <Counter>
                            <button onClick={handleLessCoffeeAmount}><Minus /></button>
                            <p>{coffeeAmount}</p>
                            <button onClick={handleMoreCoffeeAmount}><Plus /></button>
                        </Counter>
                        <div>
                            <CheckoutButton 
                                disabled={isCoffeeAmountEmpty}
                                onClick={handleCreateNewCoffeeOrder}
                            >
                                <ShoppingCartSimple weight="fill" />
                            </CheckoutButton>
                        </div>
                    </div>
                </div>
            </CoffeeCardPriceDiv>
        </CoffeeCardContainer>
    );
}
