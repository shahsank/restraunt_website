import React, {useEffect, useState} from "react";
import "../../Menu.css";

const Fajitas = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:9999/menu/fajitas", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setItems(result);
        //   console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="bg-img">
      <div className="container py-5" style={{ paddingTop: "15%" }}>
        <div className="container ml-5 py-3 px-5">
          {items.map((item) => {
            console.log(item);
            return (
              <div key={item._id}>
                <div className="row py-3">
                  <div className="food col-8 d-flex">
                    <div className="zoomin">
                      <div className="vORn mr-3">
                        <div>
                          {item.vORn === "Veg" ? (
                            <div style={{}}>
                              <div
                                style={{
                                  border: "1px solid black",
                                  height: "10px",
                                  width: "10px",
                                  borderRadius: "50%",
                                  // backgroundColor: "green",
                                  background: "green",
                                }}
                              ></div>
                            </div>
                          ) : (
                            <div>
                              <div
                                style={{
                                  border: "1px solid black",
                                  height: "10px",
                                  width: "10px",
                                  borderRadius: "50%",
                                  // backgroundColor: "green",
                                  background: "red",
                                }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="f-name">{item.name}</div>
                        <div className="f-desc">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="f-price">{item.price}</div>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-dark">+ Add</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fajitas;