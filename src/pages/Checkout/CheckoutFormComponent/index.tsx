import { 
    Bank, 
    CreditCard, 
    CurrencyDollar, 
    MapPinLine, 
    Money } 
from "phosphor-react";

import { 
    CheckoutForm, 
    CheckoutFormInputDiv, 
    CheckoutFormTitleDiv, 
    PaymentForm,
    PaymentFormCheckboxDiv,
    PaymentFormTitleDiv, 
} from "./style";

export function CheckoutFormComponent() {
    return (
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
                <PaymentFormTitleDiv>
                    <span><CurrencyDollar /></span>
                    <div>
                        <h2>Pagamento</h2>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </PaymentFormTitleDiv>
                <PaymentFormCheckboxDiv>
                    <div>
                        <CreditCard />
                        <label>CARTÃO DE CRÉDITO</label>
                    </div>
                    <div>
                        <Bank /> 
                        <label>CARTÃO DE DÉBITO</label>
                    </div>
                    <div>
                        <Money />
                        <label>DINHEIRO</label>
                    </div>
                </PaymentFormCheckboxDiv>
            </PaymentForm>
        </div>
    )
}