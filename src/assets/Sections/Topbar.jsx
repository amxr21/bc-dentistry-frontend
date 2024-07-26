import SearchBar from "../components/SearchBar";
import Notifications from "../components/Notifications";

const Topbar = () => {
    return (
        <div id="top-bar" className="pl-12 pr-80 py-6 flex fixed w-full h-30 bg-[#F3F3F3] z-50 shadow-sm">
            <div className="flex justify-between">
                <SearchBar />
                <Notifications />
            </div>
            <div id="rect" className="border-b my-5"></div>
        </div>
    )
}

export default Topbar;