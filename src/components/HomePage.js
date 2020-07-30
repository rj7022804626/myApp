import React, { Component } from "react";

import "css/font-awesome-all.css";
import "css/flaticon.css";
import "css/owl.css";
import "css/bootstrap.css";
import "css/jquery.fancybox.min.css";
import "css/animate.css";
import "css/imagebg.css";
import "css/style.css";
import "css/responsive.css";

class HomePage extends Component {

    render() {
        return (
            <div>
                <section
                    className=""
                    id="home"
                    style={{
                        backgroundImage: "linear-gradient(to right, #a8ff78, #78ffd6)"
                    }}
                >
                    <div style={{ paddingTop: "100px" }}></div>

                    <div style={{ paddingLeft: "20px", paddingRight: "0px" }}>

                        <div className="row">
                            <div className="col-xl-4 text-center" style={{ paddingTop: "20px" }}>
                                <img
                                    src={require("../assets/tronlogo1.png")}
                                    alt="Ethereum"
                                    width="400px"
                                    height="100px"
                                />
                            </div>
                            <div className="col-xl-4 tex-center" >
                                <h2 style={{ fontSize: "35px", color: "#132768" }}><span style={{ fontSize: "40px", color: "Grey" }}>
                                    <strong>3% </strong>
                                </span><strong>Daily </strong></h2>

                                <h2 style={{ fontSize: "35px", color: "#514A41" }}><span style={{ fontSize: "40px", color: "#0D8639" }}>
                                    <strong>20% </strong>
                                </span><strong>Referral Rewards </strong></h2>

                                <h2 style={{ fontSize: "35px", color: "#132768" }}><span style={{ fontSize: "40px", color: "Grey" }}>
                                    <strong>20% </strong>
                                </span><strong>Daily Compounding Rewards</strong></h2>


                                <h2 style={{ fontSize: "35px", color: "#514A41" }}><span style={{ fontSize: "40px", color: "#0D8639" }}>
                                    <strong>2% </strong>
                                </span><strong>Ultra Bonus </strong></h2><br /><br />
                                <span style={{ paddingLeft: "10px" }}>
                                    <a href="https://www.google.com">
                                        <button className="btn btn-primary" style={{ width: "150px", height: "40px", fontSize: "20px" }}>Telegram</button>
                                    </a>
                                </span>
                                <span style={{ paddingLeft: "20px" }}>
                                    <a href="https://www.google.com">
                                        <button className="btn btn-success" style={{ width: "200px", height: "40px", fontSize: "20px" }}>Verified Contract</button></a>
                                </span>
                            </div><br />

                            <div className="col-xl-4 text-center" style={{ paddingTop: "20px" }}>
                                <img
                                    src={require("../assets/hello2.png")}
                                    alt="Ethereum"
                                    width="400px"
                                    height="100px"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: "40px" }}></div>

                    <div style={{ paddingRight: "100px" }}></div>
                    <div style={{ paddingBottom: "100px" }}></div>
                </section>
            </div >
        );
    }
}

export default HomePage;
