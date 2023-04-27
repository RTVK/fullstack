import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Organic produces delivered to your door step with guaranteed quality.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
               
                <div className="text">Sivaji Nagar, Dungarpur</div>
                </div>
            </div>       





            <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email : info@primeorganics.com</div>
            </div>             <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Fruits</span>
                    <span className="text">Vegetables</span>
                    <span className="text">Dairy</span>
                    <span className="text">Team Events</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Prime organics 2022 CREATED BY Tech solutions.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
    </footer>
};

export default Footer;
