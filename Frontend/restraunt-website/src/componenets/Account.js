import React,{useState, useEffect} from "react";


const Account = () => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };
    
    fetch("http://localhost:9999/userInfo", requestOptions)
      .then(response => response.json())
      .then(result => {
        setUser(result);
         console.log(user);
      })
      .catch(error => console.log('error', error));
  },user);
  
  return (
    <div className="pt-5" style={{ height: "1000px", width: "100%",backgroundColor:"white"}}>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <div>
              <img
                src="https://static.thenounproject.com/png/219377-200.png"
                style={{ width: "30%", borderRadius: "50%" }}
                alt="Profile"
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="col mt-3">
            <div className="d-flex justify-content-between p-3">
              <div>Name:</div>
              <div>{user? user.fullName : null}</div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div>Phone Number:</div>
              <div>{user? user.phoneNumber : null}</div>
            </div>
            <div className="d-flex justify-content-between p-3">
              <div>Email:</div>
              <div>{user? user.email : null}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-5 py-3 d-flex justify-content-around">
        <button
          type="button"
          style={{ width: "30vw", height: "15vw" }}
          className="btn btn-outline-dark btn-lg"
        >
          My Orders
        </button>
        <button
          type="button"
          style={{ width: "30vw", height: "15vw" }}
          className="btn btn-outline-dark btn-lg"
        >
          My Addresses
        </button>
      </div>
    </div>
  );
};

export default Account;