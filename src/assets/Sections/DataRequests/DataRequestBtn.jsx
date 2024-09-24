const DataRequestBtn = ({FileUrl, FileSize}) => {
    return (
        <button className="border py-2 rounded-md uppercase">
            Request
            <a href={FileUrl} target="_blank"> data file</a>
            <span> - {FileSize}</span>
        </button>
    )
}

export default DataRequestBtn;