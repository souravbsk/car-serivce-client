import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContent } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const {createUser} = useContext(AuthContent);
    const handleSignup = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
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
              <h1 className="text-3xl text-center font-bold">SignUp now</h1>

              <form onSubmit={handleSignup}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
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
                    <span className="label-text">Confirm Password</span>
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
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
               Already have an account{" "}
                <Link className="text-orange-600 font-bold" to="/login">
                  Login
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
