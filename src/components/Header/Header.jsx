import "./Header.scss"
import logo from "../../assets/logo/TripWhiz.svg"


function Header() {
    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="header__left">
                    <img className="header__logo" src={logo} alt="logo" />
                </div>
                <div className="header__right">
                    <input className="header__input" placeholder="Search for destinations"></input>
                    <p>Log in</p>
                    <button className="header__button" >Sign up</button>
                </div>
            </div>

        </header>
    )
}

export default Header;