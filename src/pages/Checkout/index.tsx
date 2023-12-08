import { useContext, useEffect, useState } from "react"

import { 
    CardPriceContainer,
    CartContainerForm, 
    CheckoutContainer, 
} from "./style";

import { CoffeeCard } from "./CoffeeCard";
import { CheckoutFormComponent } from "./CheckoutFormComponent";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";

export function Checkout() {
    const {coffeeOrderList, coffeeAmount, setCoffeeAmount} = useContext(CoffeeOrderContext)
    const [finalPrice, setFinalPrice] = useState(0)

    const isCartEmpty = coffeeOrderList.length == 0

    useEffect(() => {
        const orderItemsValues = coffeeOrderList.map((item) => {
            return item.price
        })

        const orderItemsAmount = coffeeOrderList.map((item) => {
            return item.amount
        })
    
        const orderFinalPriceSum = orderItemsValues.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0)

        const orderFinalPrice = Number(((orderFinalPriceSum + 3.50) - coffeeOrderList.length).toFixed(2))

        const calcNewFinalPrice = Number(orderItemsValues) / Number(orderItemsAmount) /*novo calc toda vez que o amount for alterado*/
    
        console.log(calcNewFinalPrice)
        console.log(orderItemsAmount) /* Descobrir um método para alterar o amount*/ 
        setFinalPrice(orderFinalPrice) /* Recaucular o valor a partir do novo amount*/
        console.log(coffeeOrderList)

    }, [coffeeOrderList, coffeeAmount, setCoffeeAmount])

    return (
        <CheckoutContainer>
            <CheckoutFormComponent />
            <div>
                <h1>Cafés selecionados</h1>
                <CartContainerForm>
                    <div>
                        {
                            coffeeOrderList.map(item => {
                                return (
                                    <CoffeeCard
                                        key={item.id} 
                                        title={item.type}
                                        banner={item.banner}
                                        price={Number((item.price).toFixed(2))}
                                        amount={item.amount}
                                        handleCoffeeAmount={setCoffeeAmount}
                                    />
                                )
                            })
                        }
                    </div>
                    <CardPriceContainer>
                        <div>
                            <p>Total de itens</p>
                            <p>R${finalPrice.toFixed(2)}</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>R${"3,50"}</p>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R${isCartEmpty ? "0.00" : finalPrice.toFixed(2)}</span>
                        </div>
                        <button type="submit">CONFIMAR PEDIDO</button>
                    </CardPriceContainer>
                </CartContainerForm>
            </div>
        </CheckoutContainer>
    )
}

