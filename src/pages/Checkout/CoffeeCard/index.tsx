import { Minus, Plus, Trash } from "phosphor-react"
import { CardButtonsDiv, CardContainer, CardPriceContainer, CardTextContainer, Counter, RemoveButton } from "./style"
import { useEffect, useState } from "react"

export interface CoffeeCardProps {
    title: string
    banner: string
    price: number
    amount: number
    handleCoffeeAmount: (amount: number) => void
}

export function CoffeeCard({title, banner, price, amount, handleCoffeeAmount} : CoffeeCardProps) {
    const [coffeeAmount, setCoffeeAmount] = useState(amount);
    const [orderPrice, setOrderPrice] = useState(price)

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
        handleCoffeeAmount(coffeeAmount)
        setOrderPrice(coffeeAmount * 9.90)
    }, [coffeeAmount, handleCoffeeAmount])

    return (
        <CardContainer>
            <CardTextContainer>
                <div>
                    <img src={banner} />
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