import { useState, useEffect } from 'react'

import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

import { 
    CheckoutButton,
    CoffeeCardContainer, 
    CoffeeCardPriceDiv, 
    CoffeeCardTextDiv, 
    Counter,
    TagContainer
} from "./style"

export interface CoffeeCardProps {
    id: string
    title: string
    description: string
    banner: string
    tag: ['TRADICIONAL' , 'GELADO' , 'COM LEITE' , 'ALCOÓLICO' , 'ESPECIAL']
    price: string
    handleNewCoffeeOrder: (data : CoffeeCardProps) => void
    handleCoffeeAmount: (amount: number) => void
}

export function CoffeeCard({ id, title, description, banner, tag, price, handleNewCoffeeOrder, handleCoffeeAmount }: CoffeeCardProps) {
    const [coffeeAmount, setCoffeeAmount] = useState(0);

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
            if (state <= 0) {
                return state
            } else {
                return state -1
            }
        });
    }

    function handleCreateNewCoffeeOrder() {
        handleNewCoffeeOrder({id, title, description, banner, tag, price, handleNewCoffeeOrder, handleCoffeeAmount})
        setCoffeeAmount(0)
    }

    useEffect(() => {
        handleCoffeeAmount(coffeeAmount)
    }, [coffeeAmount, handleCoffeeAmount])

    const isCoffeAmountEmpty = coffeeAmount == 0

    return (
        <CoffeeCardContainer>
                <CoffeeCardTextDiv>
                <div>
                    <img src={banner} />
                </div>

                <TagContainer>
                    {
                        tag.map(item => {
                            return <span key={item}>{item}</span>
                        })
                    }
                </TagContainer>

                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </CoffeeCardTextDiv>
            <CoffeeCardPriceDiv>
                <div>
                    <small>R$</small>
                    <span>{price}</span>
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
                                disabled={isCoffeAmountEmpty}
                                onClick={handleCreateNewCoffeeOrder}
                            >
                                <ShoppingCartSimple weight="fill" />
                            </CheckoutButton>
                        </div>
                    </div>
                </div>
            </CoffeeCardPriceDiv>
        </CoffeeCardContainer>
    )
}