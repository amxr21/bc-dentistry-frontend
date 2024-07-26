import Logo from "../images/logo.png"

const NavLogo = () => {
    return (
        <div id="NavLogo" className="mx-auto w-fit">
            <a href="/">
                <img src={Logo} alt="" />
            </a>
        </div>
    )
}

export default NavLogo;