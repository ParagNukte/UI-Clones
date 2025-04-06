import React from "react";
import "./styleInsta.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const InstaLogin = () => {
  return (
    <React.Fragment>
      <select name="language" id="language" className="language">
        <option value="English">English</option>
      </select>

      <div className="borderBox">
        <div className="container">
          <header className="headerTitle">Instagram</header>
          <button type="submit" className="submitButton__Facebook">
            <i>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ fontSize: "30px", paddingRight: "15px" }}
              />
            </i>
            Login using Facebook
          </button>
          <div
            style={{
              display: "flex",
              width: "404px",
              padding: "20px",
              margin: "0px",
              fontFamily: "sans-serif",
              color: "#808080",
            }}
          >
            <hr style={{ width: "40%", height: "0px", color: "#808080" }} />
            OR <hr style={{ width: "40%", height: "0px", color: "#808080" }} />
          </div>
          <form>
            <div>
              <input
                className="input"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
              />
            </div>
            <div className="input">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>

            <div style={{ minWidth: "404px" }}>
              <a
                className="forgot"
                href="https://www.instagram.com/accounts/password/reset/?hl=en"
              >
                Forgot password?
              </a>
            </div>

            <button type="submit" className="submitButton__Login">
              Log In
            </button>
          </form>
          <div className="dontHave__acc">
            Dont have an account?{" "}
            <a
              href="https://www.instagram.com/accounts/emailsignup/?hl=en"
              style={{
                textDecorationLine: "none",
                color: "rgb(122, 148, 252)",
              }}
            >
              <strong>Sign Up</strong>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InstaLogin;
