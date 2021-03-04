import React, { useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useHistory } from "react-router-dom";
import AuthApi from "../context";
const URL_REGISTER = "http://apis.cadeauboutique.com/api/auth/app/register";
export default function SignUp() {
  const history = useHistory();
  const Auth = useContext(AuthApi);
  // to check if have token befor that when try to come to this
  const [error, setError] = useState(null);
  //
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phone_number, setPhone_number] = useState(null);
  const [country_code, setCountry_code] = useState(null);
  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (password == confirmPassword) {
      const data = {
        name: firstName + " " + lastName,
        gender,
        phone_number: phone_number.replace(country_code, ""),
        country_code,
        password,
      };
      fetch(URL_REGISTER, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            Cookie.set("user", data.access_token);
            Auth.setAuth(true);
          }
          console.log(data);
        })
        .catch((err) => console.err(err));
    } else {
      alert("confirm password is incorrect");
    }
  };
  return (
    <section className="sign pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 col-md-6">
            <div className="card text-center p-4 m-4">
              <h4>Create an Account</h4>
              <form
                className="text-center signup"
                onSubmit={handleSubmitSignUp}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <select onChange={(e) => setGender(e.target.value)}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group pass">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="pass-abs">
                    <img src="img/view.svg" alt="" width={20} />
                  </span>
                </div>
                <div className="form-group pass">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span className="pass-abs">
                    <img src="img/view.svg" alt="" width={20} />
                  </span>
                </div>
                <div className="form-group">
                  <PhoneInput
                    type="tel"
                    placeholder="Phone Number"
                    required
                    onChange={(value, country) => {
                      setPhone_number(value);
                      setCountry_code(country.dialCode);
                    }}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn cont"
                    style={{ backgroundColor: "#0074B766" }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
            {error}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
<p className="gray" style={{ fontSize: "10px" }}>
                By continuing you agree to our Terms and Conditions, our Privacy
                Policy, and the My Best Buy® Program Terms.
              </p>
              <hr />
              <p className="gray">OR</p>
              <button className="btn border first-blue mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    width={20}
                    height={20}
                    viewBox="0 0 510 510"
                    style={{ enableBackground: "new 0 0 510 510" }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g id="glass">
                        <path d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25    s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5    c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z" />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </span>
                Sign Up With Google
              </button>
              <button className="btn border first-blue mb-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    xmlSpace="preserve"
                    width={20}
                    height={20}
                  >
                    <g>
                      <path d="M185.255,512c-76.201-0.439-139.233-155.991-139.233-235.21c0-129.404,97.075-157.734,134.487-157.734   c16.86,0,34.863,6.621,50.742,12.48c11.104,4.087,22.588,8.306,28.975,8.306c3.823,0,12.832-3.589,20.786-6.738   c16.963-6.753,38.071-15.146,62.651-15.146c0.044,0,0.103,0,0.146,0c18.354,0,74.004,4.028,107.461,54.272l7.837,11.777   l-11.279,8.511c-16.113,12.158-45.513,34.336-45.513,78.267c0,52.031,33.296,72.041,49.292,81.665   c7.061,4.248,14.37,8.628,14.37,18.208c0,6.255-49.922,140.566-122.417,140.566c-17.739,0-30.278-5.332-41.338-10.034   c-11.191-4.761-20.845-8.862-36.797-8.862c-8.086,0-18.311,3.823-29.136,7.881C221.496,505.73,204.752,512,185.753,512H185.255z" />
                      <path d="M351.343,0c1.888,68.076-46.797,115.304-95.425,112.342C247.905,58.015,304.54,0,351.343,0z" />
                    </g>
                  </svg>
                </span>
                Sign Up With Apple
              </button>
              <hr />
              <p className="gray">
                Already have an account? <a className="gray"> Sign in</a>
              </p> */
