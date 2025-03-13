import './loginSiginUp.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className=" col-3 card shadow-lg p-5 bg-light-green">
                <h2 className="fw-bold text-center mb-4">User Login</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="loginId" className="form-label">Login ID</label>
                        <input type="text" id="loginId" className="form-control" placeholder="Enter your login ID" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-1">Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link></p>
                    <p><Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;