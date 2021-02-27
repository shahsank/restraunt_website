import React, { useState } from "react";

const Signup = (props) => {
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);

  const saveNewUser = (evt) => {
    setNewUser(evt.target.value);
  };

  const saveNewPassword = (evt) => {
    setNewPassword(evt.target.value);
  };

  const saveEmail = (evt) => {
      setEmail(evt.target.value);
  }

  const saveAddress = (evt) => {
    setAddress(evt.target.value);
}

const savePhone = (evt) => {
  setPhone(evt.target.value);
}

const saveFullName = (evt) => {
  setFullName(evt.target.value);
}


  const signup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      fullName: fullName,
      userName: newUser,
      password: newPassword,
      phoneNumber: phone,
      email: email,
      address: address
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include"
    };

    fetch("http://localhost:9999/signup", requestOptions)
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
        } else {
          setError(r.err);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const click = () => {
      const flag = true;
      props.Slogin(flag);
  }
  const close = () => {
      props.closeSign();
  }

  return (
    <div className="container" style={{}}>
      <form>
        <div
          style={{
            width: "450px",
            margin: "auto",
            marginTop: "100px",
            padding: "25px",
            borderRadius: "5%",
            backgroundImage:
              "url('https://image.freepik.com/free-photo/old-grunge-black-textures_74190-6998.jpg')",
            background:"transparent"
          }}
        >
            <div style={{ position: "relative", left: "95%" }} onClick={close}>
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
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={saveFullName}
              className="form-control"
              id="exampleUserName8"
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
              id="exampleUserName7"
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
              htmlFor="exampleUserName1"
              className="form-label"
              style={{
                color: "white",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={saveAddress}
              className="form-control"
              id="exampleUserName9"
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
              htmlFor="exampleUserName1"
              className="form-label"
              style={{
                color: "white",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Phone Number
            </label>
            <input
              type="number"
              value={phone}
              onChange={savePhone}
              className="form-control"
              id="exampleUserName10"
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
              htmlFor="exampleUserName1"
              className="form-label"
              style={{
                color: "white",
                fontFamily: "Montserrat, Arial, sans-serif",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={saveEmail}
              className="form-control"
              id="exampleUserName11"
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
              marginBottom:"15px",
              alignItems: "center",
              textAlign: "center",
              color: "whitesmoke",
            }}
          >
            {loggedIn ? `Congratulations ${newUser}! Your account has been created.` : error}
          </div>

          <button
            style={{
              justifyContent: "center",
              marginLeft: "35%",
              marginRight: "35%",
              width: "30%",
              backgroundColor: "rgb(22, 29, 39)",
              color: "rgb(255, 255, 255)",
            }}
            type="button"
            className="btn btn-outline-light"
            onClick={signup}
          >
            Signup
          </button>
          <div style={{textAlign:"center", color:"wheat", marginTop:"15px"}}>
              Already have an account? <button className="btn btn-outline-light" onClick={click}>log in</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
