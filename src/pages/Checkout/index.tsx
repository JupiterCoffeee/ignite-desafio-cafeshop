import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { 
    CardPriceContainer,
    CartContainerForm, 
    CheckoutContainer, 
} from "./style";

import { CoffeeCard } from "./CoffeeCard";
import { CheckoutFormComponent } from "./CheckoutFormComponent";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";

export function Checkout() {
    const { coffeeOrderList, coffeeAmount, setCoffeeAmount } = useContext(CoffeeOrderContext);
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        // Calculate the final price when coffeeOrderList or coffeeAmount changes
        const orderItemsValues = coffeeOrderList.map((item) => item.price);
        const orderFinalPriceSum = orderItemsValues.reduce((accumulator, value) => accumulator + value, 0);
        const orderFinalPrice = orderFinalPriceSum + 3.50;

        setFinalPrice(orderFinalPrice);
    }, [coffeeOrderList, coffeeAmount, setCoffeeAmount]);

    const orderFinalPriceBeforeTaxes = finalPrice - 3.50;
    const isCartEmpty = coffeeOrderList.length === 0;

    return (
        <CheckoutContainer>
            <CheckoutFormComponent />
            <div>
                <h1>Cafés Selecionados</h1>
                <CartContainerForm>
                    <div>
                        {
                            coffeeOrderList.map(item => (
                                <CoffeeCard
                                    key={item.id} 
                                    id={item.id}
                                    title={item.type}
                                    banner={item.banner}
                                    price={Number(item.price.toFixed(2))}
                                    amount={item.amount}
                                    handleCoffeeAmount={setCoffeeAmount}
                                />
                            ))
                        }
                    </div>
                    <CardPriceContainer>
                        <div>
                            <p>Total de items</p>
                            <p>R${orderFinalPriceBeforeTaxes.toFixed(2)}</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>R$3.50</p>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R${isCartEmpty ? "0.00" : finalPrice.toFixed(2)}</span>
                        </div>
                        <Link to="/delivery">
                            <button type="submit" disabled={isCartEmpty}>CONFIRMAR PEDIDO</button>
                        </Link>
                    </CardPriceContainer>
                </CartContainerForm>
            </div>
        </CheckoutContainer>
    );
}
