import { Link } from "react-router-dom";
import './Navbar.css';
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
    return (
        <>
            <nav className="CsNavbar navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Bite&Diet</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allplans">Plans</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/feature1">Feature 1</Link></li>
                                    <li><Link className="dropdown-item" to="/feature2">Feature 2</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/more-options">More Options</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to={'/cart'} className="btn btn-outline-success"> <BsCart4></BsCart4> cart</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
