import SearchBar from "../components/SearchBar";
import Notifications from "../components/Notifications";

const Topbar = () => {
    return (
        <div id="top-bar" className="py-6 w-full h-fit z-50 shadow-sm">
            <div className="flex justify-between w-full">
                <SearchBar />
                <Notifications />
            </div>
            <div id="rect" className="border-b my-5"></div>
        </div>
    )
}

export default Topbar;