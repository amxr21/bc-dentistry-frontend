const FilterBox = ({Id, Label}) => {
    return (
        <div className="flex gap-x-3 py-1 px-1 items-center text-md">
            <input id={Id} type="checkbox" className="w-4 h-4" />
            <label htmlFor={Id}>{Label}</label>
        </div>
    )
}

export default FilterBox;