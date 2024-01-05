import { useContext, useEffect, useState } from "react";
import { CoffeeOrderContext } from "../../../contexts/CoffeeOrderContext";

import { Minus, Plus, Trash } from "phosphor-react";
import { CardButtonsDiv, CardContainer, CardPriceContainer, CardTextContainer, Counter, RemoveButton } from "./style";
export interface CoffeeCardProps {
    id: string;
    title: string;
    banner: string;
    price: number;
    amount: number;
    handleCoffeeAmount: (amount: number) => void;
}

export function CoffeeCard({id, title, banner, price, amount, handleCoffeeAmount} : CoffeeCardProps) {
    const { coffeeOrderList, setCoffeeOrderList } = useContext(CoffeeOrderContext);

    // Local state for the amount of coffee in this card
    const [coffeeAmount, setCoffeeAmount] = useState(amount);

    // Local state for the calculated price based on the amount
    const [orderPrice, setOrderPrice] = useState(price);

    // Update the order list with the new price when the amount changes
    const handleNewOrderPrice = () => {
        const updatedOrderList = coffeeOrderList.map((order) => {
            const updatedPrice = coffeeAmount * 9.9;
            return order.id === id ? { ...order, amount: coffeeAmount, price: updatedPrice } : order;
        });
        setCoffeeOrderList(updatedOrderList);
    };

    // Increase the coffee amount, capped at 10
    const handleMoreCoffeeAmount = () => {
        setCoffeeAmount((state) => Math.min(10, state + 1));
    };

    // Decrease the coffee amount, capped at 1
    const handleLessCoffeeAmount = () => {
        setCoffeeAmount((state) => Math.max(1, state - 1));
    };

    // Remove this item from the order list
    const handleDeleteOrderItem = () => {
        const orderListWithoutDeletedItem = coffeeOrderList.filter((item) => item.id !== id);
        setCoffeeOrderList(orderListWithoutDeletedItem);
    };

    // Update the global coffee amount and calculated price when the local amount changes
    useEffect(() => {
        handleCoffeeAmount(coffeeAmount);
        setOrderPrice(coffeeAmount * 9.90);
        handleNewOrderPrice();
    }, [coffeeAmount, handleCoffeeAmount]);

    // Render the coffee card component
    return (
        <CardContainer>
            <CardTextContainer>
                <div>
                    <img src={banner} alt={title} />
                </div>
                <div>
                    <p>{title}</p>
                    <CardButtonsDiv>
                        <Counter>
                            <button onClick={handleLessCoffeeAmount}><Minus /></button>
                            <p>{coffeeAmount}</p>
                            <button onClick={handleMoreCoffeeAmount}><Plus /></button>
                        </Counter>
                        <RemoveButton onClick={handleDeleteOrderItem}><Trash /> Remover</RemoveButton>
                    </CardButtonsDiv>
                </div>
            </CardTextContainer>
            <CardPriceContainer>
                <span>R${orderPrice.toFixed(2)}</span>
            </CardPriceContainer>
        </CardContainer>
    );
}
