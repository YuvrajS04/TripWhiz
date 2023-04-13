import "./Header.scss"
import logo from "../../assets/logo/TripWhiz.svg"
import {NavLink} from "react-router-dom"


function Header() {
    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <NavLink to="/">
                    <img className="header__logo" src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="header__right">
                    <input className="header__input" placeholder="Search for destinations"></input>
                    <button className="header__button" >Log in </button>
                    <button className="header__button" >Sign up</button>
                </div>
            </div>

        </header>
    )
}

export default Header;