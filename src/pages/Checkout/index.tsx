import { useContext, useEffect, useState } from "react"

import { 
    CardPriceContainer,
    CartContainerForm, 
    CheckoutContainer, 
} from "./style";

import { CoffeeCard } from "./CoffeeCard";
import { CheckoutFormComponent } from "./CheckoutFormComponent";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";
import { Link } from "react-router-dom";

export function Checkout() {
    const {coffeeOrderList, coffeeAmount, setCoffeeAmount} = useContext(CoffeeOrderContext)
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        const orderItemsValues = coffeeOrderList.map((item) => {
            return item.price
        })
    
        const orderFinalPriceSum = orderItemsValues.reduce((accumulator, value) => {
            return (accumulator + value);
        }, 0)

        const orderFinalPrice = orderFinalPriceSum + 3.50
    
        setFinalPrice(orderFinalPrice) /* Recaucular o valor a partir do novo amount */
        console.log(coffeeOrderList)
 
    }, [coffeeOrderList, coffeeAmount, setCoffeeAmount]) // Checar eficácioa

    const orderFinalPriceBeforeTaxes = finalPrice - 3.50

    const isCartEmpty = coffeeOrderList.length == 0

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
                                        id={item.id}
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
                            <p>R${orderFinalPriceBeforeTaxes.toFixed(2)}</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>R${"3,50"}</p>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R${isCartEmpty ? "0.00" : finalPrice.toFixed(2)}</span>
                        </div>
                        <Link to="/delivery">
                            <button type="submit" disabled={isCartEmpty}>CONFIMAR PEDIDO</button>
                        </Link>
                    </CardPriceContainer>
                </CartContainerForm>
            </div>
        </CheckoutContainer>
    )
}

