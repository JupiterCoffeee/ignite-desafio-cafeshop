import { Minus, Plus, Trash } from "phosphor-react"
import { CardButtonsDiv, CardContainer, CardPriceContainer, CardTextContainer, Counter, RemoveButton } from "./style"

export interface CoffeeCardProps {
    title: string
    banner: string
    price: string
}

export function CoffeeCard({title, banner, price} : CoffeeCardProps) {
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
                            <button><Minus /></button>
                            <p>0</p>
                            <button><Plus /></button>
                        </Counter>
                        <RemoveButton><Trash /> Remover</RemoveButton>
                    </CardButtonsDiv>
                </div>
            </CardTextContainer>
            <CardPriceContainer>
                <span>R$ {price}</span>
            </CardPriceContainer>
        </CardContainer>
    )
}