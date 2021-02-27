import React, { useState } from "react";
import Appetizers from "./Menu/Appetizers";
import Pizza from "./Menu/Pizza";
import Burger from "./Menu/Burger";
import Fajitas from "./Menu/Fajitas";
import MainCourse from "./Menu/MainCourse";
import Beverages from "./Menu/Beverages";
import Pasta from "./Menu/Pasta";
import Ss from "./Menu/Ss";
import Dessert from "./Menu/Dessert";
import "../Menu.css";

const Menu = () => {
  const [appetizers, setAppetizer] = useState(false);
  const [pizza, setPizza] = useState(false);
  const [burger, setBurger] = useState(false);
  const [fajitas, setFajitas] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [mc, setMc] = useState(false);
  const [pasta, setpasta] = useState(false);
  const [ss, setSs] = useState(false);
  const [beverage, setBeverage] = useState(false);
  return (
    <>
      <div className="menu-top jumbotron text-center custom-heading style-1">
        <div style={{ marginTop: "11%", marginBottom: "11%" }}>
          <h1 style={{ color: "white", fontSize: "300%" }}>
            Delicious Cuisines
          </h1>
          <hr
            style={{
              marginLeft: "50px",
              marginRight: "50px",
              height: "2px",
              borderWidth: "0",
              color: "white",
              backgroundColor: "white",
            }}
          ></hr>
          <h3>DISCOVER THE MENU</h3>
        </div>
      </div>
      <div className="type-bg-img">
        <div className="container-fluid">
          <div className="row">
            <div
              onClick={() => {
                setAppetizer(false);
                setMc(false);
                setSs(!ss);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("https://potatorolls.com/wp-content/uploads/Soup-and-Salad-Pair-1280x720.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
                // opacity: "0.3"
              }}
            >
              <div className="food-title">
                <h1>Soups & Salads</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setAppetizer(!appetizers);
                setMc(false);
                setSs(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://www.bettycrocker.com/-/media/Images/BC/content/menus-holidays-parties/seasonal-ideas/easy-holiday-appetizers/easy-holiday-appetizers_hero.jpg?W=800")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Appetizers</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setAppetizer(false);
                setMc(!mc);
                setSs(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeJmVdhqUzaUs7cPnKg4iSEovrfHQj3KunKA&usqp=CAU")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Main Course</h1>
              </div>
            </div>
          </div>
          <div>{appetizers ? <Appetizers /> : null}</div>
          <div>{ss ? <Ss /> : null}</div>
          <div>{mc ? <MainCourse /> : null}</div>
          <div className="row">
            <div
              onClick={() => {
                setpasta(false);
                setBurger(false);
                setPizza(!pizza);
              }}
              className="col col-12 col-md-4 zoomout  custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,.3)),url("https://i.ndtvimg.com/i/2017-11/pizza_620x350_71511520342.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Pizza</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setpasta(false);
                setBurger(!burger);
                setPizza(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Burger</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setpasta(!pasta);
                setBurger(false);
                setPizza(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background  border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://hips.hearstapps.com/del.h-cdn.co/assets/17/38/1506028948-screen-shot-2017-09-21-at-52207-pm.png")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Pasta</h1>
              </div>
            </div>
          </div>
          <div>{pizza ? <Pizza /> : null}</div>
          <div>{burger ? <Burger /> : null}</div>
          <div>{pasta ? <Pasta /> : null}</div>
          <div className="row">
            <div
              onClick={() => {
                setBeverage(false);
                setDessert(false);
                setFajitas(!fajitas);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("https://www.bettycrocker.com/-/media/Images/BC/content/menus-holidays-parties/seasonal-ideas/easy-holiday-appetizers/easy-holiday-appetizers_hero.jpg?W=800")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Fajitas</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setBeverage(false);
                setDessert(!dessert);
                setFajitas(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background  border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://www.bakingclassinchennai.com/blog/wp-content/uploads/2017/07/red-velvet-cake-sl-520449-xl.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Dessert</h1>
              </div>
            </div>
            <div
              onClick={() => {
                setBeverage(!beverage);
                setDessert(false);
                setFajitas(false);
              }}
              className="col col-12 col-md-4 zoomout custom-img-background  border bg-light"
              style={{
                background:
                  'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url("https://www.wearegurgaon.com/wp-content/uploads/2019/06/best-shakes-gurgaon.jpg")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                width: "30vw",
                height: "15vw",
              }}
            >
              <div className="food-title">
                <h1>Beverages</h1>
              </div>
            </div>
          </div>
          <div>{fajitas ? <Fajitas /> : null}</div>
          <div>{dessert ? <Dessert /> : null}</div>
          <div>{beverage ? <Beverages /> : null}</div>
        </div>
      </div>
      <div className="custom-col-padding mb-100 bg-img-drinks">
        <div className="container-fluid  jumbotron text-center custom-heading style-1">
          <div className="row">
            <div className="col-md-12 centered">
              <div
                className="custom-heading style-1"
                style={{ marginTop: "11%", marginBottom: "11%" }}
              >
                <h1>
                  <span>Wine List</span>
                </h1>
                <h3>Finest wine selection</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content type-bg-img py-5">
        <div className="container py-5 frame-new custom-img-background">
          <div className="row mb-20 d-flex ">
            <div className="col-md-6">
              <div className="custom-heading style-2 text-center py-3">
                <h4>Wine by the glass (100 ml)</h4>
                <div className="divider style-1">
                  <i className="fa fa-circle hr-icon left"></i>
                </div>
              </div>
              <ul className="menu-style-2 py-3">
                <div>
                  <h5>CHAMPAGNE</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div>
                    <div className="menu-item-title">
                      <p>NV Veuve Cdivcquot Brut Rose</p>
                    </div>
                    <div className="menu-item-description">
                      <p>
                        Elegant and sensual wine from Reims, France, exquisite
                        taste and sensual idensity.
                      </p>
                    </div>
                  </div>
                  <div className="menu-item-price">
                    <p>$29</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div>
                    <div className="menu-item-title">
                      <p>Grand Cru Pinot Noir Vintage</p>
                    </div>
                    <div className="menu-item-description">
                      <p>
                        Tasty with almond and halzelnut notes and pineapple plus
                        papaya soft aroma.
                      </p>
                    </div>
                  </div>
                  <div className="menu-item-price">
                    <p>$32</p>
                  </div>
                </div>
                <div>
                  <h5>Still white</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>A. Retief Sauvignon Blanc</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$18</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Peter Zemmer Pinot Grigio</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$18</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Mount Pleasant Lovedale Semillon</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$26</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Toolangi Pauls Chardonnay </p>
                  </div>
                  <div className="menu-item-price">
                    <p>$26</p>
                  </div>
                </div>
                <div>
                  <h5>Still red</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Torbeck Celts Shiraz</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$29</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Caillard Mataro</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$23</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Barbaresco Cascina Ghercina Riserva Nebbiolo</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$22</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Between Five Bells Negroamaro</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$26</p>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="custom-heading style-2 text-center py-3">
                <h4>HALF BOTTLES (375 ml)</h4>
                <div className="divider style-1">
                  <i className="fa fa-circle hr-icon left"></i>
                </div>
              </div>
              <ul className="menu-style-2 py-3">
                <div>
                  <h5>Half bottles sparkdivng</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>NV Adami Garbel Prosecco Brut</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$55</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>NV Thienot Brut</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$90</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>NV Veuve Cdivcquot Brut</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$100</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>MV Krug Grande Cuvee</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$310</p>
                  </div>
                </div>
                <div>
                  <h5>Half bottles white</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Bella Ridge Chenin Blanc</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$65</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Vouvray Clos de Bourg Sec Huet</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$100</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Vouvray Le Mont Sec Huet</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$120</p>
                  </div>
                </div>
                <div>
                  <h5>Half bottles red</h5>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Mount Mary Pinot Noir</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$180</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Curly Flat Pinot Noir</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$75</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Brunello di Montalcino La Chiuse</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$135</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Barollo Massodivno Serralunga d’Alba</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$125</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Bella Ridge Grenache</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$70</p>
                  </div>
                </div>
                <div className="menu-item d-flex justify-content-between">
                  <div className="menu-item-title">
                    <p>Rusden Black Guts Shiraz</p>
                  </div>
                  <div className="menu-item-price">
                    <p>$88</p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
