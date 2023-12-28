import { Info, MapPin } from "phosphor-react";
import 
{ 
    DeliveryContainer, 
    DeliveryInfoDiv, 
    DeliveryTitleDiv
} from "./style";

export function Delivery() {
    return (
        <DeliveryContainer>
            <DeliveryTitleDiv>
                <h2>Uhu! Pedido confirmado</h2>
                <h3>Agora é só aguardar que logo o café chegará até você</h3>
            </DeliveryTitleDiv>
            <DeliveryInfoDiv>
                <div>
                    <Info>
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Entrega em <strong></strong></p>
                            <p>São Paulo - São Paulo, SP</p>
                        </div>
                    </Info>
                    <Info>
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </Info>
                    <Info>
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Entrega em</p>
                            <strong></strong>
                        </div>
                    </Info>
                </div>
            </DeliveryInfoDiv>
        </DeliveryContainer>
    )
}