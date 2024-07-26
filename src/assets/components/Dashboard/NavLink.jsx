const NavLink = ({icon, link, classes}) => {
     return (
        <div className={`nav-link flex items-center justify-start w-40 ${classes}`}>
            <div className="icon">
                <img src={icon} alt={link} className="mr-4" />
            </div>
            <div className="link">
                <p >{link}</p>
            </div>
        </div>
     )
}

export default NavLink;