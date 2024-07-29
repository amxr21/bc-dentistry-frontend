import CheveronDown from "../images/icons/chevron-down.svg"


const FilterHeader = ({filterHedaer}) => {
    const dropDown = (e) => {
        if(e.target .classList.contains('rotate-180')){
            e.target.parentElement.parentElement.lastElementChild.classList.replace("h-36", "h-0")
            e.target.classList.replace('rotate-180', 'rotate-0')
        }
        else{
            e.target.parentElement.parentElement.lastElementChild.classList.replace("h-0", "h-36")
            e.target.classList.replace('rotate-0', 'rotate-180')
        }
    }


    return (
        <div className="flex justify-between items-center text-lg font-medium mb-2 text-gray-700">
            <h2>{filterHedaer}</h2>
            <img src={CheveronDown} onClick={dropDown} alt="" className="drop-btn cursor-pointer rotate-180" />
        </div>
    )
}

export default FilterHeader;