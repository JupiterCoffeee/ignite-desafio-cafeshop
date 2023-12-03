import { useState } from 'react'

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
    title: string
    description: string
    banner: string
    tag: ['TRADICIONAL' , 'GELADO' , 'COM LEITE' , 'ALCOÓLICO' , 'ESPECIAL']
    price: string
}

export function CoffeeCard({ title, description, banner, tag, price }: CoffeeCardProps) {
    const [ coffeeAmount, setCoffeeAmount] = useState(0);

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

    return (
        <CoffeeCardContainer>
                <CoffeeCardTextDiv>
                <div>
                    <img src={banner} />
                </div>

                <TagContainer>
                    {
                        tag.map(item => {
                            return <span>{item}</span>
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
                            <CheckoutButton><ShoppingCartSimple weight="fill" /></CheckoutButton>
                        </div>
                    </div>
                </div>
            </CoffeeCardPriceDiv>
        </CoffeeCardContainer>
    )
}