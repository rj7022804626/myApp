import React, { Component } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/modal.video.min.css";
import "../assets/css/plugins.css";
import "../assets/css/slick.min.css";


class Footer extends Component {

    render() {
        return (
            <div>
                <div
                    className="footer-copyright text-center py-3"
                    style={{
                        backgroundImage: "linear-gradient(to right, #0F2027, #203A43, #2C5364)"
                    }}
                >
                    <span style={{ color: "White" }}>
                        Tron Banks © All rights Reserved {" "}

                    </span>{" "}

                </div>
            </div>
        );
    }
}

export default Footer;
