import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/modal.video.min.css";
import "../assets/css/plugins.css";
import "../assets/css/slick.min.css";


class HomePage4 extends Component {

    render() {
        return (
            <div>
                <section
                    className=""
                    id="home"
                    style={{
                        backgroundImage: "linear-gradient(to right, #355C7D, #6C5B7B, #C06C84)"
                    }}
                >
                    <div style={{ paddingTop: "50px" }}></div>


                    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                        <div
                            className="row"
                        >


                            <div
                                className="col-xl-4"
                            >
                                <img
                                    className="svg-big"
                                    src={require("../assets/my_invest.png")}
                                    alt="Ethereum"
                                    width="310px"
                                /></div></div>
                        <span>
                            <div style={{ paddingTop: "50px" }}></div>

                        </span>



                    </div>
                    <div style={{ paddingRight: "100px" }}></div>
                    <div style={{ paddingTop: "50px" }}></div>

                    <div style={{ paddingBottom: "100px" }}></div>


                </section>
            </div >
        );
    }
}

export default HomePage4;
