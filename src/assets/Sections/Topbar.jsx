import SearchBar from "../components/SearchBar";
import Notifications from "../components/Notifications";

const Topbar = () => {
    return (
        <div id="top-bar" className="px-12 py-6 flex fixed w-[92em] h-30 z-50 shadow-sm ">
            <div className="flex justify-between w-full">
                <SearchBar />
                <Notifications />
            </div>
            <div id="rect" className="border-b my-5"></div>
        </div>
    )
}

export default Topbar;