import React, { Component } from "react";

import "./css/font-awesome-all.css";
import "./css/flaticon.css";
//import "./css/owl.css";
import "./css/bootstrap.css";
import "./css/jquery.fancybox.min.css";
import "./css/animate.css";
import "./css/imagebg.css";
import "./css/style.css";
import "./css/responsive.css";

import back from "./images/background/control-bg1.jpg"
import back2 from "./images/background/pagetitle-bg.png"


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txnloading: false,
    };
  }

  render() {
    return (
      <div>

        <section className="transactions-work">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div id="content_block_39">
                  <div className="content-box">
                    <div className="sec-title">
                      <h2>How Tron Banks work ?</h2>
                    </div>
                    <h5>Tron Banks is the best compounding bank on blockchain!</h5>
                    <div className="text">
                      <p>Assume that your principle investment is  <strong>100,000 TRX</strong><br /><br />

                        <strong>Day 1 :</strong> You will receive 3000 TRX (3% daily) out of which 40% goes to your roi wallet 1200 TRX (3000*40%) and 60% will be added to your principle i.e., 1800 TRX.<br /><br />

                        <strong>Day 2 :</strong> Now your principle is 101,800 (because 1800 TRX was added from previous day).
                        Principle : 101,800 TRX, Interest : 3054 TRX
                        Pay Out : 1221.6 TRX, addition to principle : 1832.4
                        <br /><br />

                        <strong>Day 3 :</strong> Principle : 103,632.4 TRX, Interest : 3108.97 TRX
                        Pay Out : 1243.62 TRX, addition to principle : 1865.38      ... so on
                      </p>
                      <h2><strong>Total - 330,000 TRX </strong><br /><br /> </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
                <div id="content_block_40">
                  <div className="inner-box">
                    <div className="single-item"  >
                      <div className="count-box" style={{
                        backgroundImage: require("./images/icons/icon-9.png")
                      }}>
                        <span style={{ color: "Blue" }}>01</span>
                      </div>
                      < div className="box" >
                        <div className="pattern-bg">
                          <div className="pattern-1" style={{ backgroundImage: require("./images/icons/shap-19.png") }}>
                          </div>
                          <div className="pattern-2" style={{ backgroundImage: require("./images/icons/shap-20.png") }}>
                          </div>
                        </div>
                        <h4><a href="#s">Download Tron wallet</a></h4>
                        <div className="text">For PC : Download Tron Link google chrome extension <br />
                        For Mobile phones : Download Tron Wallet or Math Wallet</div>
                      </div>
                    </div>
                    <div className="single-item"  >
                      <div className="count-box" style={{
                        backgroundImage: require("./images/icons/icon-10.png")
                      }}>                        <span style={{ color: "Blue" }}>02</span>
                      </div>
                      < div className="box" >
                        <div className="pattern-bg">
                          <div className="pattern-1" style={{ backgroundImage: require("./images/icons/shap-19.png") }}>
                          </div>
                          <div className="pattern-2" style={{ backgroundImage: require("./images/icons/shap-21.png") }}>
                          </div>
                        </div>
                        <h4><a href="#s">Buy TRX</a></h4>
                        <div className="text">Buy a minimum of 510 TRX from your favorite exchange</div>
                      </div>
                    </div>
                    <div className="single-item"  >
                      <div className="count-box" style={{
                        backgroundImage: require("./images/icons/icon-11.png")
                      }}>                        <span style={{ color: "Blue" }}>03</span>
                      </div>
                      < div className="box" >
                        <div className="pattern-bg">
                          <div className="pattern-1" style={{ backgroundImage: require("./images/icons/shap-19.png") }}>
                          </div>
                          <div className="pattern-2" style={{ backgroundImage: require("./images/icons/shap-22.png") }}>
                          </div>
                        </div>
                        <h4><a href="#s">Earn 3% daily</a></h4>
                        <div className="text">You will start receiving 3% daily in which 60% is compounded to principle and 40% payout.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pricing-style-two centred"
          style={{ backgroundImage: `url(${back})` }}>
          <div className="container">

            <div className="row">
              <div className="col-xl-6">
                <h2 style={{ color: "Yellow", fontSize: "30px" }}>Your Stats  </h2><br />

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Investment : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalInvested)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Business : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalBiz)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Withdrawable : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.avlBalance)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Level 1 Biz : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.level1Biz)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Level 1 Count : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.level1Count)}  </strong></span>
                </h2>
                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Level Rewards : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.levelRewards)} TRX </strong></span>
                </h2>
                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Generation Rewards : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.GenerationRewards)} TRX </strong></span>
                </h2>
                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Rewards : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalRewards)} TRX </strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Withdrawn : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalPaid)} TRX</strong></span>
                </h2>

              </div>

              <div className="col-xl-6">
                <h2 style={{ color: "Yellow", fontSize: "30px" }}>Global Stats</h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "10px" }} ><span style={{ color: "White" }}>
                  <strong>Total Members : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalMembers)}  </strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Transactions : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.depositid)}  </strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Transaction Volume : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.totalInvestments)} TRX</strong></span>
                </h2>



                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Club 1 Reserve: </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.club1Reserve)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Club 2 Reserve: </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.club2Reserve)} TRX</strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Big Player : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.BigPlayer)}  </strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Big Player's Investment : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.BigPlayerDeposit)} TRX </strong></span>
                </h2>

                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Big Leader : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.BigLeader)}  </strong></span>
                </h2>


                <h2 style={{ fontSize: "15px", paddingLeft: "15px", paddingTop: "20px" }} ><span style={{ color: "White" }}>
                  <strong>Total Paid : </strong></span>
                  <span style={{ color: "#3BD62C" }}>
                    <strong> {Math.round(this.props.siteTotalPaid)} TRX </strong></span>
                </h2>


              </div>

            </div>

          </div>
        </section>
        <div className="text-center" style={{
          paddingTop: "20px", paddingBottom: "20px", backgroundImage: "linear-gradient(to right, #355C7D, #6C5B7B, #C06C84)"
        }}>
          <p style={{ color: "White" }}> @ Tron Banks - All Rights Reserved </p>
        </div>

      </div >
    );
  }
}

export default Home;
