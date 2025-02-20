import './Hero.css';
import heroMainImg from '../../assets/Diet-PNG.png';
import { FaRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='container-fluid hero bg-csPrimary p-5 app-theme-bg'>
            <div className='row align-items-center'>
                {/* Left Column */}
                <div className='col-md-6 mb-3'>
                    <div className=' d-flex justify-content-center align-items-center h-100'>
                        <div className='row'>
                            <div className='col'>
                                <h1 className='fw-extrabold text-csPrimary display-4 hero-title mb-4'>
                                    Bite And Diet
                                </h1>
                                <p className='lead fw-semibold text-csSecondary mb-4'>
                                    Unlock your best health with our tailored diet programs.
                                </p>
                                <ul className='list-unstyled lead'>
                                    <li className='fs-5 text-csPrimary mb-2'>All-new diet programs</li>
                                    <li className='fs-5 text-csPrimary mb-2'>Custom diet plans designed for you</li>
                                    <li className='fs-5 text-csPrimary mb-2'>Customizable plans based on your needs</li>
                                </ul>
                                <button className='btn-csPrimary shadow-lg mt-4'>
                                    Get Started  <FaRightLong className='text-csPriamry' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column with Image as Background */}
                <div className='col-md-6'>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <img src={heroMainImg} className='img img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
