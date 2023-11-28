import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import Logo from '../../assets/Logo.png'
import { HeaderContainer } from './styles'
import { NavLink } from "react-router-dom";

export function Header() {
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
                </div>
            </nav>
        </HeaderContainer>
    )
}