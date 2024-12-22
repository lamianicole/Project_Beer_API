import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">
                <img src="/img/beer-logo.png" alt="Beer Logo" className="navbar-logo" />
            </Link>
        </div>
    );
}

export default Navbar;
