import { Minus, Plus, Trash } from "phosphor-react"
import { CardButtonsDiv, CardContainer, CardPriceContainer, CardTextContainer, Counter, RemoveButton } from "./style"
import { useContext, useEffect, useState } from "react"
import { CoffeeOrderContext } from "../../../contexts/CoffeeOrderContext"

export interface CoffeeCardProps {
    id: string
    title: string
    banner: string
    price: number
    amount: number
    handleCoffeeAmount: (amount: number) => void
}

export function CoffeeCard({id, title, banner, price, amount, handleCoffeeAmount} : CoffeeCardProps) {
    const {coffeeOrderList, setCoffeeOrderList} = useContext(CoffeeOrderContext)
    const [coffeeAmount, setCoffeeAmount] = useState(amount);
    const [orderPrice, setOrderPrice] = useState(price)

    function handleNewOrderPrice(state: CoffeeCardProps) {
        const updatedOrderList = coffeeOrderList.map(order => {
            const updatedPrice = coffeeAmount * 9.9

            if (order.id === state.id) {
                return { ...order, amount: coffeeAmount, price: updatedPrice }; // Checar eficácioa
            } else {
                return order;
            }
        });

        setCoffeeOrderList(updatedOrderList)
        console.log("triggered")
    }

    // Atualize o estado global com a nova lista de pedidos
    // Isso pode depender da implementação específica do seu contexto
    // Pode ser algo como setCoffeeOrderList(updatedOrderList)

    function handleMoreCoffeeAmount() {
        setCoffeeAmount((state) => {
            if (state >= 10) {
                return state
            } else {
                return state + 1
            }
        });
    }

    function handleLessCoffeeAmount() {
        setCoffeeAmount((state) => {
            if (state <= 1) {
                return state
            } else {
                return state -1
            }
        });
        
    }
    
    useEffect(() => {
        handleCoffeeAmount(coffeeAmount);
        setOrderPrice(coffeeAmount * 9.90);
        handleNewOrderPrice({ id, title, banner, price, amount, handleCoffeeAmount });
    }, [coffeeAmount, handleCoffeeAmount]); // Checar eficácioa



    return (
        <CardContainer>
            <CardTextContainer>
                <div>
                    <img src={banner}/>
                </div>
                <div>
                    <p>{title}</p>
                    <CardButtonsDiv>
                        <Counter>
                            <button onClick={handleLessCoffeeAmount}><Minus /></button>
                            <p>{coffeeAmount}</p>
                            <button onClick={handleMoreCoffeeAmount}><Plus /></button>
                        </Counter>
                        <RemoveButton><Trash /> Remover</RemoveButton>
                    </CardButtonsDiv>
                </div>
            </CardTextContainer>
            <CardPriceContainer>
                <span>R${orderPrice.toFixed(2)}</span>
            </CardPriceContainer>
        </CardContainer>
    )
}