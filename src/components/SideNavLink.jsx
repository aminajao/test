import { Link } from "react-router-dom";

const SideNavLink = ({icon,title,newClass, dropable}) => {
    return (
        <div className={` nav-item_container ${newClass ? newClass : "" }`}>
            <span >
                <img className="nav-icon" src={icon} />
            </span>
            <Link classname="nav-item_text logout" to="/">
                {title}
            </Link>
            
        </div>
    )
}

export default SideNavLink
