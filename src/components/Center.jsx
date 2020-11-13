import React from 'react';
import Qr from '../assets/qr-code.svg';
import Img1 from "../assets/apple.svg";
import Img2 from "../assets/movies-app.svg";
import Img3 from "../assets/transport.svg";
import Img4 from "../assets/app-store.svg";
import Img5 from "../assets/apple.svg";
import Button from "./Button";

const Center = () => {
    return (
        <>

            <div className="content-container">
                <div className="frame-container">
                    <p>Frame</p>
                    <div className="frame-content_container">
                        <p className="frame-content_title">Type A</p>
                        <div className="qr-code_content">
                            <div className="qr-code_container">
                                <img src={Qr} />
                                <p>A</p>
                            </div>
                            <div className="qr-code_container">
                                <img src={Qr} />
                                <p>B</p>
                            </div>
                            <div className="qr-code_container">
                                <img src={Qr} />
                                <p>C</p>
                            </div>
                            <div className="qr-code_container">
                                <img src={Qr} />
                                <p>D</p>
                            </div>
                            <div className="qr-code_container">
                                <img src={Qr} />
                                <p>E</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-container">
                    <p>Color</p>
                    <div className="color-content_container">

                    </div>
                </div>
                <div className="logo-container">
                    <p>Logo</p>
                    <div className="logo-content_container">
                        <p className="logo-content_title">Jumia png</p>
                        <div className="logo-content">
                            <div className="logo-item_container">
                                <img src={Img1} />
                            </div>
                            <div className="logo-item_container">
                                <img src={Img2} />
                            </div>
                            <div className="logo-item_container">
                                <img src={Img3} />
                            </div>
                            <div className="logo-item_container">
                                <img src={Img4} />
                            </div>
                            <div className="logo-item_container">
                                <img src={Img5} />
                            </div>
                            <div className="logo-item_container">
                                <img src={Img3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <Button text="Preview" color="#2D4EF5" />
                <Button text="Publish" color="#1FA65A" />
            </div>
        </>
    )
}

export default Center;
