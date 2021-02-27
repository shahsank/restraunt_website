import React, { useState } from "react";

const Login = (props) => {
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);

  const saveNewUser = (evt) => {
    setNewUser(evt.target.value);
  };

  const saveNewPassword = (evt) => {
    setNewPassword(evt.target.value);
  };

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ userName: newUser, password: newPassword });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include"
    };

    fetch("http://localhost:9999/login", requestOptions)
      .then((r) => {
        if (r.ok) {
          return { success: true };
        } else {
          return r.json();
        }
      })
      .then((r) => {
        if (r.success === true) {
          setLoggedIn(true);
          props.logedIn();

        } else {
          setError(r.err);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const click = () => {
    const flag = true;
    props.Signuup(flag);
  };

  const close = () => {
    props.closeLogin();
  };

  return (
    <div className="container" style={{}}>
      <form>
        <div
          style={{
            width: "400px",
            padding: "25px",
            margin: "auto",
            marginTop: "100px",
            borderRadius: "5%",
            backgroundImage:
              "url('https://image.freepik.com/free-photo/old-grunge-black-textures_74190-6998.jpg')",
            background:"transparent"
            }}
        >
          <div style={{ position: "relative", left: "95%" }}>
            <button
              className="btn btn-danger"
              style={{
                padding: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20px",
                width: "20px",
              }}
              onClick={close}
            >
              x
            </button>
          </div>
          <div
            style={{
              justifyContent: "center",
              marginLeft: "15%",
              marginRight: "15%",
            }}
            className="mb-3"
          >
            <label
              htmlFor="exampleUserName1"
              className="form-label"
              style={{
                color: "white",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={newUser}
              onChange={saveNewUser}
              className="form-control"
              id="exampleUserName1"
              required={true}
            ></input>
          </div>
          <div
            style={{
              justifyContent: "center",
              marginLeft: "15%",
              marginRight: "15%",
            }}
            className="mb-3"
          >
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{
                color: "white",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={newPassword}
              onChange={saveNewPassword}
              required
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "whitesmoke",
            }}
          >
            {loggedIn ? "Logged In Successfully!" : error}
          </div>
          <button
            style={{
              justifyContent: "center",
              marginLeft: "35%",
              marginRight: "35%",
              marginTop: "20px",
              width: "30%",
              backgroundColor: "rgb(252, 218, 154)",
              color: "rgb(22, 29, 39)",
            }}
            type="button"
            className="btn btn-block"
            onClick={login}
          >
            Log In
          </button>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "wheat",
            }}
          >
            Don't have an account?{" "}
            <button
              style={{ marginLeft: "20px" }}
              className="btn btn-outline-light"
              onClick={click}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
