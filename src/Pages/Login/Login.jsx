import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContent } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const {signIn} = useContext(AuthContent)
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";



  const handleLogin = (e) =>{
    e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(res => {
          const user = res.user;
          navigate(from,{replace:true})

        })
        .catch((err) => {
          console.log(err.message);
        })
  }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login now</h1>

              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>
              </form>
              <p className="my-4 text-center">New to Car Doctors <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
