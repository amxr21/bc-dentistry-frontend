import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLogo, NavLink } from "../components";
import Icon1 from "../images/icons/dashboard.png";
import Icon2 from "../images/icons/appointments.png";
import Icon3 from "../images/icons/patients.png";
import Icon4 from "../images/icons/medicines.png";
import Icon5 from "../images/icons/plans.png";
import Icon6 from "../images/icons/settings.png";
import Icon7 from "../images/icons/info.png";

const navList = [
    { title: "Dashboard", icon: Icon1 },
    { title: "Appointments", icon: Icon2 },
    { title: "Patients", icon: Icon3 },
    { title: "Medicines", icon: Icon4 },
    { title: "Plans", icon: Icon5 },
 
];

const Navbar = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname.split("/").pop());

    useEffect(() => {
        setCurrentPath(location.pathname.split("/").pop());
    }, [location]);

    const renderNavLinks = () =>
        navList.map((nav) => {
            const isActive = nav.title.toLowerCase() === currentPath.toLowerCase();
            return (
                <Link key={nav.title} to={`/${nav.title.toLowerCase()}`}>
                    <NavLink icon={nav.icon} link={nav.title} classes={isActive ? "font-bold" : "font-light"} />
                </Link>
            );
        });

    return (
        <div id="Navbar" className="bg-[#000814] w-[14em] h-full fixed px-6 py-10">
            <NavLogo />
            <div id="Navlinks" className="text-white flex flex-col gap-y-12 mt-16">
                <div className="main flex flex-col gap-y-6 items-center">
                    {renderNavLinks()}
                </div>
                <div className="personal flex flex-col gap-y-6 items-center">
                    <NavLink icon={Icon6} link={"setting"} />
                    <NavLink icon={Icon7} link={"info"} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
