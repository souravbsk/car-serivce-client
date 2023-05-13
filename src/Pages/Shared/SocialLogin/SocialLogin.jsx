import React, { useContext } from "react";
import {FaGoogle} from "react-icons/fa"
import { AuthContent } from "../../../providers/AuthProvider";

const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContent);
  const handleGoogleSignIn = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-circle">
        <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;
