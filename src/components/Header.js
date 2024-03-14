import {SWIGGY_RES_LOGO} from "../utils/constants";
const Header = () => {
    return (
        <div className="head">
            <div className="logo-container">
                <img className="logo" src={SWIGGY_RES_LOGO}/> 
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>ABout Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header; 