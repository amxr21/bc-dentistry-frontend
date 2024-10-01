const DataRequestBtn = ({DataStatus, FileUrl, FileSize, FileContent}) => {
    return (
        <button className="border py-2 rounded-md uppercase">
            {
                DataStatus == "completed" ? "Download " : DataStatus == "processing" ? "Waiting for " : 'Request '
            }
            {/* Request {'\t'} */}
            <a href={FileUrl} target="_blank">{FileContent == "" ? ` data file` : FileContent}</a>
            <span> {FileSize}</span>
        </button>
    )
}

export default DataRequestBtn;