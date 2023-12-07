import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import Logo from '../../assets/Logo.png'
import { CoffeeOrderList, HeaderContainer } from './styles'
import { NavLink } from "react-router-dom";
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext';
import { useContext } from "react"

export function Header() {
    const {coffeeOrderList} = useContext(CoffeeOrderContext)

    const coffeeOrderListAmount = coffeeOrderList.length
    const isCoffeeOrderListEmpty = coffeeOrderListAmount

    return (
        <HeaderContainer>
            <nav>
                <div>
                    <NavLink to='/'>
                        <img src={Logo} alt=''/>
                    </NavLink>
                </div>
                <div>
                    <span>
                        <MapPin weight='fill'/>
                        São Paulo, SP
                    </span>
                    <button>
                        <NavLink to="/checkout">
                            <ShoppingCartSimple weight='fill'/>
                        </NavLink>
                    </button>
                        { isCoffeeOrderListEmpty ? 
                            (<CoffeeOrderList>{coffeeOrderListAmount}</CoffeeOrderList>)
                            :
                            (<></>)
                        }
                </div>
            </nav>
        </HeaderContainer>
    )
}