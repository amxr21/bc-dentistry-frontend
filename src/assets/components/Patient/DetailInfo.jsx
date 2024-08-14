const DetailInfo = ({header, info, classes, headerStyles}) => {
    return (
        <div className={`details ${classes}`}>
            <h2 className={`detail-header text-sm ${headerStyles}`}>{header}</h2>
            <p className="detail-info text-lg font-semibold">{info}</p>
        </div>
    )
}

export default DetailInfo;