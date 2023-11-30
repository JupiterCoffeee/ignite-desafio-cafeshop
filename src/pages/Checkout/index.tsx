import { 
    Bank, 
    CreditCard, 
    CurrencyDollar, 
    MapPinLine, 
    Money } 
from "phosphor-react";

import { 
    CartContainerForm, 
    CheckoutContainer, 
    CheckoutForm, 
    CheckoutFormInputDiv, 
    CheckoutFormTitleDiv, 
    PaymentForm, 
} from "./style";

export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                <h1>Complete seu pedido</h1>
                    <CheckoutForm action="">
                        <CheckoutFormTitleDiv>
                            <span><MapPinLine /></span>
                            <div>
                                <h2>Endereço de Entrega</h2>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </CheckoutFormTitleDiv>

                        <CheckoutFormInputDiv>
                            <input type="number" name="" id="" placeholder="CEP"/>
                            <input type="text" name="" id="" placeholder="Rua"/>

                            <div>
                                <input type="number" name="" id="" placeholder="Número"/>
                                <input type="text" name="" id="" placeholder="Complemento"/>
                            </div>

                            <div>
                                <input type="text" name="" id="" placeholder="Bairro"/>
                                <input type="text" name="" id="" placeholder="Cidade"/>
                                <input type="number" name="" id="" placeholder="UF"/>
                            </div>
                        </CheckoutFormInputDiv>
                    </CheckoutForm>
                
                <PaymentForm action="">
                        <div>
                            <span><CurrencyDollar /></span>
                            <div>
                                <h2>Pagamento</h2>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" name="" id="" placeholder={<CreditCard /> + `CARTÃO DE CRÉDITO`}/>
                            <input type="checkbox" name="" id="" placeholder={<Bank /> + `CARTÃO DE CRÉDITO`}/>
                            <input type="checkbox" name="" id="" placeholder={<Money /> + `CARTÃO DE CRÉDITO`}/>
                        </div>
                    </PaymentForm>
            </div>
            
            <div>
                <h1>Complete seu pedido</h1>
                <CartContainerForm>
                    <h1>Cafés selecionados</h1>
                    <div>

                    </div>

                    <div>
                        <div>
                            <p>Total de itens</p>
                            <p>R${}</p>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <p>R${}</p>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R${}</span>
                        </div>
                        <button type="submit">CONFIMAR PEDIDO</button>
                    </div>
                </CartContainerForm>
            </div>
        </CheckoutContainer>

    )
}