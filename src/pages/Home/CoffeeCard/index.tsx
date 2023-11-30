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
                            <button><Minus /></button>
                            <p>0</p>
                            <button><Plus /></button>
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