import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const Navbar = () => {
    const location = useLocation();
    const subscriptions = useSelector((state: RootState) => state.local.subscribtions.value).length || 0;
    return (
        <nav className="CsNavbar navbar navbar-expand-lg bg-body-tertiary shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Bite&Diet</Link>
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
                                <li><Link className="dropdown-item" to="/aboutus">About us</Link></li>
                                <li><Link className="dropdown-item" to="/whybiteandDiet">why bite and diet</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/more-options">More Options</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true" to="#">Disabled</Link>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center gap-2">
                        {location.pathname !== '/login' && (
                            <Link to={'/login'} className="btn btn-outline-success">Login</Link>
                        )}
                        <Link to={'/cart'} className="btn btn-outline-secondary position-relative"> 
                            Subscriptions
                            <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-1 rounded-top-3">
                                {subscriptions}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
