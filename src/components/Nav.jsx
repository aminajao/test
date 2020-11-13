import React from 'react';
import Icon from "../assets/dashboard.png";
import Avatar from "../assets/avatar.jpg";


function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-container_left">
                <span className="close">
                    <img src={Icon} />
                </span>
                <h2>QR Coupons</h2>
                <span className="vertical-line">|</span>
                <h3 className="blue-text">Create Coupon</h3>
            </div>
            <div className="nav-container_right">
                <span className="vertical-line">|</span>
                <div>
                    <img src={Icon} />
                </div>
                <span className="vertical-line">|</span>
                <div className="avatar-name">
                    <p>Emmanuel Abu</p>
                </div>
                <div className="avatar-container">
                    <img src={Avatar} />
                </div>
            </div>
        </div>
    )
}

export default Nav
