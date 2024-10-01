const DataRequestDescription = ({Description}) => {
    return (
        <div className="description h-24">
            <h2 className="text-xl font-semibold">Description:-</h2>
            <p className="text-justify">{Description}</p>
        </div>
    )
}

export default DataRequestDescription;