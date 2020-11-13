import React from 'react';
import { Link } from "react-router-dom";
import SideNavLink from "./SideNavLink";
import DashboardIcon from "../assets/dashboard.png";


const SideNav = () => {
    return (
        <div className="sidenav-container">
            <div className="sidenav-logo_container">
                <Link>
                    <h2 className="sidenav-logo">Tokenfy</h2>
                </Link>
            </div>

            <div className="sidenav-link_container">
                <SideNavLink title="Dashboard" icon={DashboardIcon} />
                <SideNavLink title="Coupons" icon={DashboardIcon} />
                <SideNavLink title="Reviews" icon={DashboardIcon} />
                <SideNavLink title="Admins" icon={DashboardIcon} />
                <SideNavLink title="QR Coupons" icon={DashboardIcon} />
                
                <div className="horizontal-line"></div>

                <SideNavLink title="Settings" icon={DashboardIcon} />
                <SideNavLink title="Trash" icon={DashboardIcon} />
            </div>

            <div>
                <SideNavLink newClass="logout" title="Log Out" icon={DashboardIcon} />
            </div>
        </div>
    )
}

export default SideNav;
