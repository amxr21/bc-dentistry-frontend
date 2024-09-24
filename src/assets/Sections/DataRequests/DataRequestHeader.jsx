const DataRequestHeader = ({Type, DataType, FileType, Id, Status}) => {
    console.log(Type);
    
    if(Type == "on-chain"){
        return (
            <>
                <h1 className="text-2xl font-semibold  ">{FileType}</h1>
                <div className="flex justify-between text-lg">
                    <h1 className="">{`Id: ${Id}`}</h1>
                    <h1 className="underline">{`${Status}`}</h1> 
                </div>
            </>
        )
    }
    else if(Type == "off-chain"){
        return (
            <>
                <h1 className="text-2xl font-semibold  ">{`${DataType}`}</h1>
                <div className="flex justify-between text-lg">
                    <h1 className="">{`Id: ${Id}`}</h1>
                    <h1 className="underline">{`${Status}`}</h1> 
                </div>
            </>
        )

    }
}

export default DataRequestHeader;