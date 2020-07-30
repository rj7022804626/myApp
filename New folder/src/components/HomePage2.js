import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/modal.video.min.css";
import "../assets/css/plugins.css";
import "../assets/css/slick.min.css";


class HomePage2 extends Component {

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
                                className="col-xl-0"
                            >
                                <img
                                    className="svg-big"
                                    src={require("../assets/tronlogo.png")}
                                    alt="Ethereum"
                                    width="60px"
                                /></div>
                            <div
                                className="col-xl-4"
                            >
                                <img
                                    className="svg-big"
                                    src={require("../assets/invest_section.png")}
                                    alt="Ethereum"
                                    width="310px"
                                /></div></div>
                        <span>
                            <div style={{ paddingTop: "50px" }}></div>

                            <form

                            ><div
                                className="row"
                            >

                                    <div
                                        className="col-xl-4"
                                    >
                                        <input
                                            id="refid"
                                            type="text"
                                            className="form-control"
                                            ref={(input) => {
                                                this.refid = input;
                                            }}
                                            placeholder="Minimum 500 TRX"
                                            required
                                        /></div>
                                    <br />
                                    <br />

                                    <div className="col-xl-4"  >
                                        <button
                                            className="btn btn-success"
                                            data-target="#tm-login"
                                            style={{ color: "White" }}
                                        >
                                            Invest
                                        </button>
                                        <br />
                                    </div>
                                </div>
                            </form>

                        </span>



                    </div>
                    <div style={{ paddingRight: "100px" }}></div>
                    <div style={{ paddingTop: "50px" }}></div>


                </section>
            </div >
        );
    }
}

export default HomePage2;
