import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-center">
        <div style={{ paddingTop: "11%", paddingBottom: "11%" }}>
          <h2>Discover</h2>
          <h1>The Royal Plate</h1>
          <hr
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
          ></hr>
        </div>
      </div>
      <div className="container-fluid text-center mb-5">
        <div className="container-fluid bkg-img1">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-3 d-none d-md-block pt-80">
              <img
                className="img img-fluid"
                src="http://www.pixel-industry.com/html/royal-plate/img/pics/spices-left.png"
                alt="Royal Plate - Restaurant &amp; Catering HTML Template"
              />
            </div>
            <div className="col-md-6 col-sm-8 centered ">
              <div
                className="custom-heading style-1 frame-box custom-img-background bkg-img2"
                style={{ backgroundAttachment: "fixed" }}
              >
                <div>
                  <h1>
                    <span>Our story</span>
                  </h1>
                  <h4>Love for food</h4>

                  <div className="divider style-1 center">
                    <span className="hr-simple left"></span>
                    <i className="fa fa-circle hr-icon"></i>
                    <span className="hr-simple right"></span>
                  </div>
                </div>

                <p className="centered">
                  Welcome. This is Royal plate. Elegant &amp; sophisticated
                  restaurant template. Royal plate offers different home page
                  layouts with smart and unique design, showcasing beautifully
                  designed elements every restaurant website should have. Smooth
                  animations, fast loading and engaging user experience are just
                  some of the features this template offers.
                  <br />
                  So, give it a try and dive into a world of royal restaurant
                  websites.
                </p>
              </div>
            </div>
            <div className="col-sm-3 d-none d-md-block hidden-xs pt-80">
              <img
                className="img img-fluid"
                src="http://www.pixel-industry.com/html/royal-plate/img/pics/spices-right.png"
                alt="Royal Plate - Restaurant &amp; Catering HTML Template"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", paddingTop: "20%" }}
        >
          <div className="text-center" style={{ paddingBottom: "250px" }}>
            <h2 id="yell">Visit us at Royal Palace</h2>
            <h1 id="whi">Enjoyable & Comfortable</h1>
            <i
              className="fas fa-utensils"
              style={{ color: "rgb(168, 129, 57)", fontSize: "30px" }}
            ></i>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
          backgroundAttachment: "fixed",
        }}
      >
        <div
          id="carouselExampleIndicators"
          className="carousel slide container container-fluid"
          style={{ paddingBottom: "5%", paddingTop: "5%" }}
          data-ride="carousel"
        >
          <div className="row">
            <div className="col-lg col-md col-sm">
              <ol className="carousel-indicators">
                <li
                  style={{ backgroundColor: "black", opacity: "0.3" }}
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  style={{ backgroundColor: "black", opacity: "0.3" }}
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  style={{ backgroundColor: "black", opacity: "0.3" }}
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container d-flex">
                    <img
                      src="http://www.pixel-industry.com/html/royal-plate/img/pics/img-09.jpg"
                      className="d-none d-md-block"
                      alt="img1"
                      style={{
                        height: "auto",
                        width: "40%",
                        marginTop: "2%",
                        marginBottom: "5%",
                      }}
                    />
                    <div className=" custom-heading style-1">
                      <h1
                        className="custom-heading style-1"
                        style={{ textAlign: "center", marginTop: "5%" }}
                      >
                        Catering
                      </h1>
                      <h4 style={{ textAlign: "center" }}>Corporate Events</h4>
                      <p
                        className="centered frame text-center"
                        style={{ padding: "15%" }}
                      >
                        Planning an important business meeting with your
                        partners? Impress them with lunch in Royal Plate. Royal
                        Plate covers everything from business lunches, to custom
                        team building programs and corporate parties. No matter
                        of party size and occasion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container d-flex">
                    <img
                      src="http://www.pixel-industry.com/html/royal-plate/img/pics/img-10.jpg"
                      className="d-none d-md-block "
                      style={{
                        height: "auto",
                        width: "40%",
                        marginTop: "2%",
                        marginBottom: "5%",
                      }}
                      alt="img1"
                    />
                    <div className=" custom-heading style-1">
                      <h1
                        className="custom-heading style-1"
                        style={{ textAlign: "center", marginTop: "5%" }}
                      >
                        Catering
                      </h1>
                      <h4 style={{ textAlign: "center" }}>Social Events</h4>
                      <p
                        className="centered frame text-center"
                        style={{ padding: "15%" }}
                      >
                        Weather you are celebrating your birthday, have a family
                        reunion or something else, we’ll make it enjoying and
                        memorable. Our experts have years of experience in party
                        planning and will make sure it is a delicious success,
                        enjoying and memorable for you and your guests! Time to
                        put your party hat on!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container d-flex">
                    <img
                      src="http://www.pixel-industry.com/html/royal-plate/img/pics/img-01.jpg"
                      className="d-none d-md-block "
                      style={{
                        height: "auto",
                        width: "40%",
                        marginTop: "2%",
                        marginBottom: "5%",
                      }}
                      alt="img1"
                    />
                    <div className=" custom-heading style-1">
                      <h1
                        className="custom-heading style-1"
                        style={{ textAlign: "center", marginTop: "5%" }}
                      >
                        Catering
                      </h1>
                      <h4
                        className="custom-font"
                        style={{ textAlign: "center" }}
                      >
                        Special Events
                      </h4>
                      <p
                        className="centered frame text-center"
                        style={{ padding: "15%" }}
                      >
                        Celebrate your special event in beautiful atmosphere of
                        Royal Plate. Exquisite & creative cousine, friendly
                        atmosphere and highly professional staff will make your
                        special day beautiful & enjoyable. You can select from
                        couple of pre-made menus for every occasion that should
                        please many different palates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  style={{ backgroundColor: "black", opacity: "0.3" }}
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  style={{ backgroundColor: "black", opacity: "0.3" }}
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
