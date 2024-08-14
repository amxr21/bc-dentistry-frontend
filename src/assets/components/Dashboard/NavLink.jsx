const NavLink = ({icon, title, link, classes}) => {
     return (
        <div className={`nav-link flex items-center justify-start w-40 ${classes}`}>
            <div className="icon">
                <img src={icon} alt={link} className="mr-4" />
            </div>
            <div className="link">
                <p>{title}</p>
            </div>
        </div>
     )
}

export default NavLink;