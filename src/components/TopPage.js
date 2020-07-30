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
import "./App.css";
import back from "./images/background/control-bg1.jpg"

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
                                    <figure className="logo"><a href="index.html"><img src={require("../assets/logotyped.png")}
                                        alt="Ethereum" width="330px" /></a></figure>

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
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>3%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Daily Compounding</strong></span>
                                        </h2><br />
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>20%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Level Bonus</strong></span>
                                        </h2><br />
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>40%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Generation Bonus</strong></span>
                                        </h2><br />

                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>1%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Ultra Bonus</strong></span>
                                        </h2><br />
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>2%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Big Player Bonus</strong></span>
                                        </h2><br />
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>1%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Big Leader Bonus</strong></span>
                                        </h2><br />
                                        <h2 style={{ fontSize: "24px" }}><span style={{ color: "#92AD72" }}>
                                            <strong>1% & 2%</strong></span> <span style={{ color: "White" }}>
                                                <strong>Club Bonus</strong></span>
                                        </h2><br />

                                        <div className="btn-box">
                                            <a href="https://tronscan.org/#/contract/TATurv1eaoYes3ruLS8yRDJnCBc7DnBpbp/code" className="btn-one"><i className="fab fa-dribbble" style={{ paddingRight: "10px" }}></i>100% Verfied</a>                    </div>
                                        <div className="btn-box">
                                            <a href="https://t.me/etherbanks_official" className="btn-one"><i className="fab fa-telegram" style={{ paddingRight: "10px" }}></i>Telegram</a>                    </div>
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
                            <div className="lower-box" style={{}} >
                                <div style={{ paddingTop: "110px" }} ></div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <h5 style={{ fontSize: "25px", textAlign: "left", paddingLeft: "20px" }}><span style={{ color: "#3BD62C" }}>
                                            <strong>Investment</strong></span> <span style={{ color: "White" }}>
                                                <strong>Section</strong></span>
                                        </h5>
                                        <div className="btn-box" style={{ fontSize: "20px", textAlign: "left", paddingLeft: "30px" }}>
                                            <br />
                                            {this.props.depositCount < 1
                                                ? <form
                                                    onSubmit={(event) => {
                                                        event.preventDefault();
                                                        const refid = this.refid.value;
                                                        const amount = this.amount.value;
                                                        if (amount >= this.props.minDepositSize && amount <= this.props.maxDepositSize) {
                                                            this.props.invest(refid, amount);
                                                        } else {
                                                            toast.warn("Deposit value not in range");
                                                        }
                                                    }}
                                                >
                                                    <div className="row">
                                                        <h5 style={{ color: "White" }}>
                                                        </h5>
                                                        <input className=" " type="text"
                                                            style={{
                                                                background: "none", border: "none",
                                                                borderBottom: "1px solid #153772", color: "White"
                                                            }}
                                                            id="refid"
                                                            ref={(input) => {
                                                                this.refid = input;
                                                            }}

                                                            placeholder="Referral ID" required />
                                                        <br />
                                                        <h5 style={{ color: "Orange", fontSize: "17px" }}>  </h5>

                                                    </div>

                                                    <div className="row" >
                                                        <h5 style={{ color: "White", paddingTop: "5px" }}>
                                                        </h5>
                                                        <input className=" " type="text"
                                                            id="amount"
                                                            ref={(input) => {
                                                                this.amount = input;
                                                            }}
                                                            style={{
                                                                background: "none", border: "none",
                                                                borderBottom: "1px solid #153772", color: "White"
                                                            }}

                                                            placeholder="Min 500 TRX" required />
                                                    </div>

                                                    <div className="row" style={{ paddingTop: "20px", paddingLeft: "30px" }}>
                                                        <button className="btn btn-success" type="submit">Invest</button>
                                                    </div>

                                                    <div style={{ paddingBottom: "50px" }}></div>

                                                </form>







                                                : <form
                                                    onSubmit={(event) => {
                                                        event.preventDefault();
                                                        const amount = this.amount.value;
                                                        if (amount >= this.props.minDepositSize && amount <= this.props.maxDepositSize) {
                                                            if (amount >= this.props.lastDeposit) {
                                                                this.props.reinvest(amount);
                                                            } else {
                                                                toast.error("Amount less than previous deposit");
                                                            }
                                                        } else {
                                                            toast.error("Amount not in range specified");
                                                        }
                                                    }}
                                                >
                                                    <div className="row">
                                                        <h5 style={{ color: "White" }}>
                                                        </h5>
                                                        <input className="" type="text"
                                                            id="amount"
                                                            ref={(input) => {
                                                                this.amount = input;
                                                            }}
                                                            style={{
                                                                background: "none", border: "none",
                                                                borderBottom: "1px solid #153772", color: "White"
                                                            }}
                                                            placeholder="Min 500 TRX" required />

                                                    </div>

                                                    <div className="row" style={{ paddingTop: "10px" }}>
                                                        <button className="btn btn-success" type="submit">Invest Again</button>
                                                    </div>

                                                    <div style={{ paddingBottom: "50px" }}></div>

                                                </form>
                                            }






                                            {this.props.depositCount > 0
                                                ? <div>
                                                    <h2 style={{ fontSize: "25px", textAlign: "left", }} ><span style={{ color: "#3BD62C" }}>
                                                        <strong>Divest</strong></span> <span style={{ color: "White" }}>
                                                            <strong>Section</strong></span>
                                                    </h2>
                                                    <br />

                                                    <h2 style={{ fontSize: "15px", textAlign: "left", paddingLeft: "15px", color: "Grey" }} ><span style={{ color: "White" }}>
                                                        <strong>Withdrawable : </strong></span>
                                                        <span style={{ color: "#3BD62C" }}>
                                                            <strong> {Math.round(this.props.avlBalance)} TRX</strong></span>
                                                    </h2>
                                                    <form
                                                        onSubmit={(event) => {
                                                            event.preventDefault();
                                                            this.props.withdraw(Math.round(this.props.avlBalance));
                                                        }}
                                                    >

                                                        <br />


                                                        <button className="btn btn-success" type="submit">Withdraw</button>

                                                        <div style={{ paddingBottom: "50px" }}></div>

                                                    </form>













                                                    <h2 style={{ fontSize: "25px", textAlign: "left", }}><span style={{ color: "#3BD62C" }}>
                                                        <strong>Your  </strong></span> <span style={{ color: "White" }}>ID
                                                        </span>
                                                    </h2>

                                                    <form >
                                                        <div className="row">

                                                            <input className=" " type="text"
                                                                ref={(textarea) => this.textArea = textarea}
                                                                style={{
                                                                    background: "none", border: "none",
                                                                    borderBottom: "1px solid #153772", color: "White"
                                                                }}
                                                                value={this.props.account} required />
                                                        </div>
                                                        <div className="row" style={{
                                                            paddingTop: "10px"
                                                        }} >
                                                            {
                                                                document.queryCommandSupported('copy') &&
                                                                <div>
                                                                    <button className="btn btn-success" onClick={this.copyHandler}>
                                                                        Copy
                                                                </button>
                                                                </div>
                                                            }

                                                            <div className="row" style={{ paddingTop: "20px" }}>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div style={{ paddingBottom: "10px" }}></div>
                                                    </form>
                                                </div>
                                                : <span></span>
                                            }

                                        </div>
                                    </div>
                                    {this.props.depositCount > 0 ?

                                        <div className="col-xl-6">

                                            <h5 style={{ fontSize: "25px", paddingLeft: "20px" }}><span style={{ color: "#3BD62C" }}>
                                                <strong>Referral</strong></span> <span style={{ color: "White" }}>
                                                    <strong>Stats</strong></span>
                                            </h5>

                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 1 : <strong><span style={{ color: "White" }}>{this.props.ref1sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 2 : <strong><span style={{ color: "White" }}>{this.props.ref2sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 3 : <strong><span style={{ color: "White" }}>{this.props.ref3sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 4 : <strong><span style={{ color: "White" }}>{this.props.ref4sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 5 : <strong><span style={{ color: "White" }}>{this.props.ref5sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 6 : <strong><span style={{ color: "White" }}>{this.props.ref6sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 7 : <strong><span style={{ color: "White" }}>{this.props.ref7sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 8 : <strong><span style={{ color: "White" }}>{this.props.ref8sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 9 : <strong><span style={{ color: "White" }}>{this.props.ref9sum}</span></strong>   </h2>
                                            <h2 style={{ color: "Orange", fontSize: "15px", paddingTop: "25px" }}>Level 10 : <strong><span style={{ color: "White" }}>{this.props.ref10sum}</span></strong> </h2>
                                        </div>
                                        : <span></span>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </section >

            </div >
        );
    }
}
export default TopPage;
