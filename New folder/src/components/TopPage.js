import React, { Component } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import "./css/font-awesome-all.css";
import "./css/flaticon.css";
import "./css/bootstrap.css";
import "./css/jquery.fancybox.min.css";
import "./css/animate.css";
import "./css/imagebg.css";
import "./css/style.css";
import "./css/responsive.css";
import back from "./images/background/control-bg.png"

//let url = "https://tronbanks.net/";
let url = "https://tronbanks.net/";
toast.configure();

class TopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            txnloading: false,
        };
        this.copyHandler = this.copyHandler.bind(this);

    }

    copyHandler = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        toast.success('Your link Copied');
    };

    render() {
        return (
            <div>
                <header className="main-header home-16">
                    <div className="outer-container">
                        <div className="container">

                            <div className="main-box clearfix">
                                <div className="logo-box pull-left">
                                    <figure className="logo"><a href="index.html"><img src={require("../assets/tronlogo.png")}
                                        alt="Ethereum" width="250px" /></a></figure>

                                </div>
                                <div className="menu-area pull-right clearfix">

                                    <div className="btn-box"><a href="https://t.me/etherbanks_official"><i className="fab fa-telegram " style={{ paddingRight: "10px", }} width="30px" ></i>Telegram</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="banner-style-16 boxed-wrapper" style={{
                    backgroundImage: `url(${back})`
                }}
                >
                    <div className="anim-icons">
                    </div>

                    <div className="container">
                        <div className="upper-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>3%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Daily</strong></span>
                                        </h2><br />
                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>20%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Referral Rewards</strong></span>
                                        </h2><br />
                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>40%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Generation Bonus</strong></span>
                                        </h2><br />

                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>1%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Ultra Bonus</strong></span>
                                        </h2><br />
                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>2%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Big Player Bonus</strong></span>
                                        </h2><br />
                                        <h2><span style={{ color: "#92AD72" }}>
                                            <strong>1% & 2%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Club Bonus</strong></span>
                                        </h2><br />
                                        <div className="btn-box">
                                            <a href="https://tronscan.org/#/contract/TATurv1eaoYes3ruLS8yRDJnCBc7DnBpbp/code" className="btn-one"><i className="fab fa-dribbble" style={{ paddingRight: "10px" }}></i>100% Trustworthy</a>                    </div>
                                        <div className="btn-box"><a href="https://t.me/etherbanks_official"><i className="fab fa-telegram " style={{ paddingRight: "10px", }} width="30px" ></i>Telegram</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6  col-md-12 col-sm-12 image-column">
                                <div className="image-box js-tilt">
                                    <figure className="image wow slideInRight"  >
                                        <img
                                            src={require("./images/resource/illustration-33.png")}
                                            alt="Ethereum"
                                        />

                                    </figure>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div >

                    </div>
                    </div>
                <h2 style={{ paddingTop: "140px", paddingLeft: "140px", color: "White", fontSize: "30px" }}>Investment section is disabled for few hours..</h2>

                </section >
 
            </div >
        );
    }
}
export default TopPage;
