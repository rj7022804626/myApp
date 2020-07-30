import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/modal.video.min.css";
import "../assets/css/plugins.css";
import "../assets/css/slick.min.css";
import Logo from "../assets/logo2.png";
import Background from "../assets/img/bg2.jpg";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txnloading: false,
        };
    }

    render() {
        return (
            <div>
                <header className=""  >
                    <div className="tm-header-menu" style={{
                        backgroundImage: "linear-gradient(to right, #0F2027, #203A43, #2C5364)"
                    }}>
                        <div className="container tm-header-menu-container" >
                            <div className="tm-site-branding">
                                <a href="https://www.google.com">
                                    <img
                                        className="svg-big"
                                        src={require("../assets/tronlogo.png")}
                                        alt="Telegram"
                                        width="80px"
                                    /></a>
                                <span style={{ paddingLeft: "10px" }}>

                                </span>
                                <a href="https://www.google.com">
                                    <img
                                        className="svg-big"
                                        src={require("../assets/tronbanksword.png")}
                                        alt="Telegram"
                                        width="180px"
                                    /></a>

                            </div>

                            <nav className="tm-primary-nav tm-section-active"></nav>

                            <div
                                style={{

                                }}
                            >

                            </div>

                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Navbar;
