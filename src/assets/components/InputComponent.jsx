const InputComponent = ({header, type, placeholder, classes}) => {
    return (
        <div className={`input ${classes}`}>
            <div className="input-header text-lg mb-1">{header}</div>
            <input placeholder={placeholder} type={type} className="p-2 border rounded-md w-full" />
        </div>
    )
}

export default InputComponent;