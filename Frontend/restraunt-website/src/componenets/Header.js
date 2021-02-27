import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

const Header = (props) => {
  const [login, setLogin] = useState(false);
  const [signup, setSignUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };
    fetch("http://localhost:9999/loggedin", requestOptions)
      .then((r) => r.json())
      .then((r) => {
        if (r.ok) {
          setLoggedIn(true);
        }
      });
  }, []);

  const Loogin = () => {
    setLogin(true);
    setSignUp(false);
  };

  const closeLogin = () => {
    setLogin(false);
  };

  const closeSign = () => {
    setSignUp(false);
  };

  const Slogin = (flag) => {
    setLogin(flag);
    setSignUp(!flag);
  };

  const Signuup = (flag) => {
    setLogin(!flag);
    setSignUp(flag);
  };

  const logedIn = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      credentials: "include",
    };
    fetch("http://localhost:9999/logout", requestOptions)
      .then((r) => {
        setLoggedIn(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand navbar-dark fixed-top">
        <a className="navbar-brand" href="#">
          <img
            alt="icon"
            style={{ height: "50px", width: "80px" }}
            src="http://www.pixel-industry.com/html/royal-plate/img/logo.png"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active p-2">
              <Link to="/">
                <div>Home</div>
              </Link>
            </li>
            <li className="nav-item active p-2">
              <Link to="/menu">
                <div>Menu</div>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Order
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
          </ul>
          {loggedIn ? (
            <>
              <button>
                <Link to="/user">
                  <img
                    className="img-fluid p-0"
                    style={{ height: "20px", width: "20px" }}
                    src="https://static.thenounproject.com/png/219377-200.png"
                  />
                </Link>
              </button>
              <button onClick={logout}>
                <Link to="/">Log Out</Link>
              </button>
            </>
          ) : (
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
              onClick={Loogin}
            >
              Log In
            </button>
          )}
        </div>
      </nav>
      {login ? (
        <Login Signuup={Signuup} closeLogin={closeLogin} logedIn={logedIn} />
      ) : null}
      {signup ? <Signup Slogin={Slogin} closeSign={closeSign} /> : null}
    </div>
  );
};

export default Header;
