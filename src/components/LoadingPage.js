import React, { Component } from "react";
import "./loader.css";



class LoadingPage extends Component {

    render() {
        return (
            <div>

                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>

                    </div>

                </div>

            </div >
        );
    }
}

export default LoadingPage;
