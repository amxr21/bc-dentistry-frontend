const AppointmentReasonsList = ({header, list}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="reasons" className="text-lg underline mb-2" >{header}</label>
            <select id="reasons" className="w-full outline-none text-lg border-bottom border p-2 rounded-md" >
                <option disabled value="reason" className=" opacity-50">Choose a reason</option>
                {
                    list.map((option) => {
                        return (
                            <option value={option.value || option}>{option.text || option}</option>
                        )
                    })
                }

            </select>
        </div>
    )
}

export default AppointmentReasonsList;