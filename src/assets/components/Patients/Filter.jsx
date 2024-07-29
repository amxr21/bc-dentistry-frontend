import {FilterBox, FilterHeader} from "../index";

const Filter = ({FilterTitle, FilterId, FilterLabels}) => {
    return (
        <div className="py-2 px-4">
            <FilterHeader filterHedaer={'Appointment for'} />
            <div className="flex flex-col gap-y-1 h-36 overflow-hidden text-gray-500">
                {
                    FilterLabels.map((f) => {
                        return <FilterBox Id={FilterId} Label={f} />
                    })
                }
            </div>
        </div>
    )
}

export default Filter;