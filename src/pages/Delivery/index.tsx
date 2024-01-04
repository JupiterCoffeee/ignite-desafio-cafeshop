import { useContext } from "react";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";

import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import 
{ 
    DeliveryContainer, 
    DeliveryInfoBoxDiv, 
    DeliveryInfoDiv, 
    DeliveryTitleDiv,
    Info
} from "./style";

import Illustration from '../../assets/Illustration.png'

export function Delivery() {
    const {order} = useContext(CoffeeOrderContext)
    return (
        <DeliveryContainer>
            <DeliveryTitleDiv>
                <h2>Uhu! Pedido confirmado</h2>
                <h3>Agora é só aguardar que logo o café chegará até você</h3>
            </DeliveryTitleDiv>
            <DeliveryInfoDiv>
                <DeliveryInfoBoxDiv>
                    <Info backgroundColor="purple">
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Entrega em <strong>{order.address}</strong></p>
                            <p>São Paulo - São Paulo, SP</p>
                        </div>
                    </Info>
                    <Info backgroundColor="lightYellow">
                        <span><Clock weight="fill"/></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </Info>
                    <Info backgroundColor="darkYellow">
                        <span><CurrencyDollar weight="fill"/></span>
                        <div>
                            <p>Método de pagamento</p>
                            <strong>{order.paymentMethod}</strong>
                        </div>
                    </Info>
                </DeliveryInfoBoxDiv>
                <div>
                    <img src={Illustration} alt="Delivery guy riding a purple motorcycle"/>
                </div>
            </DeliveryInfoDiv>
        </DeliveryContainer>
    )
}