import React from 'react';

const Footer = ()=>{
    return (
        <div id="footer-wrapper" className="m-0">
            <footer id="footer" style={{paddingTop:"5%", paddingBottom:"5%"}} >
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-md" style={{display:"flex",justifyContent:"space-evenly"}}>
                            <a href="index.html">
                            <img alt="icon" style={{height:"90%",width:"100%"}} src="http://www.pixel-industry.com/html/royal-plate/img/logo.png"></img>
                            </a>
                            <div >
                            <ul className="contact-info-list" style={{color:"white"}}>
                                <li>
                                    22 Royal Street, Sundance Avenue, New York
                                </li>
                                <li>
                                    <span>RESERVATIONS NUMBER:</span> +91-760-588-1660
                                </li>

                                <li>
                                    <span>WORKING HOURS:</span>
                                </li>

                                <li>
                                    MON- FRI: 08:00 AM - 10:00 PM
                                </li>
                                <li>SAT - SUN: 10:00 AM - 11:00 PM</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;