const InputComponent = ({header, type, placeholder, classes, options}) => {
    if(type == 'text' || type == 'date'){
        return (
            <div className={`input ${classes}`}>
                <div className="input-header text-lg mb-1">{header}</div>
                <input placeholder={placeholder} type={type} className="p-2 border rounded-md w-full" />
            </div>
        )
    }
    else if(type == 'select'){
        return (
            <div className="flex flex-col grow">
                <label htmlFor="1" className="input-header text-lg mb-1">{header}</label>
                <select id="1" className="p-2 border rounded-md w-full h-full">
                    <option value="1">{`Select ${header}`}</option>
                    {
                        options.map((option) => {
                            return <option value="1">{option}</option>
                        })
                    }
                </select>
            </div>
        )
    }


}

export default InputComponent;