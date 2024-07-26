import Search from "../images/icons/magnifier.png"

const SearchBar = () => {
    return (
        <div id="SearchBar" className="flex gap-x-4 text-neutral-500">
            <input type="text" placeholder="Looking for something ?" className="bg-transparent border border-gray-300 rounded-md h-10 w-64 px-2 text-sm outline-none" />
            <div className="search-icon border border-gray-300 h-10 w-10 flex p-2.5 rounded-md">
                <img src={Search} alt="" />
            </div>
        </div>
    )
}

export default SearchBar;