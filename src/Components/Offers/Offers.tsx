import "./Offers.css";
import excitement from "../../assets/excietment.webp";
import { BsGift, BsStars } from "react-icons/bs";
import { FaPercent, FaRocket } from "react-icons/fa";

const Offers = () => {
    return (
        <div className="container app-theme-bg csOffers rounded-5 p-5 shadow-lg bg-light mb-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-md-5 text-center">
                    <img className="img-fluid rounded-4" src={excitement} alt="Excitement" />
                </div>

                {/* Offer Details Section */}
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2 className="fw-bold text-dark text-uppercase">
                            <BsGift className="text-danger me-2" /> Exclusive Deals Just for You! <BsStars className="text-warning ms-2" />
                        </h2>
                        <p className="fs-1 fw-bold text-csPrimary">
                            Unlock 50<span className="text-danger">%</span> OFF
                        </p>
                        <p className="fs-5 text-muted">Limited time only – Grab yours now!</p>
                        <div className="mt-3">
                            <button className="btn btn-csPrimary px-4 py-2 rounded-pill shadow-lg">
                                Grab the Offer <FaRocket className="ms-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
