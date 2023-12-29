import { useState } from "react";

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

import { PaymentMethodButton } from "./PaymentMethodButton";

export function CheckoutFormComponent() {
    const paymentMethods = [
        {
            title: 'CARTÃO DE CRÉDITO',
            icon: <CreditCard />,
        },
        {
            title: 'CARTÃO DE DÉBITO',
            icon: <Bank />,        
        },
        {
            title: 'DINHEIRO',
            icon: <Money />,        
        }
    ]

    const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(null);

    const handlePaymentMethodSelected = (title: string) => {
      setActivePaymentMethod(title === activePaymentMethod ? null : title);
    };

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
                    <input type="text" name="endereco" id="" placeholder="Rua"/>
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
                    {paymentMethods.map((item) => (
                    <div key={item.title} onClick={() => handlePaymentMethodSelected(item.title)}>
                        <PaymentMethodButton
                            title={item.title}
                            icon={item.icon}
                            onClick={() => handlePaymentMethodSelected(item.title)}
                            className={activePaymentMethod === item.title ? 'active' : ''}
                        />
                    </div>
                    ))}
                </PaymentFormCheckboxDiv>
            </PaymentForm>
        </div>
    )
}