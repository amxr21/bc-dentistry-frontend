const DataRequestType = ({Type}) => {
    
    if(Type =="off-chain"){
        return (
            <div className="card-header flex flex-col gap-x-4 gap-y-3">
                <h1 className="py-1 px-2 text-2xl font-bold uppercase bg-red-500 rounded-md text-white">{Type}</h1>
            </div>
        )
    }
    else{
        return (
            <div className="card-header flex flex-col gap-x-4 gap-y-3">
                <h1 className="py-1 px-2 text-2xl font-bold uppercase bg-green-500 rounded-md text-white">{Type}</h1>
            </div>
        )
        
    }
}


export default DataRequestType;