import DataRequestBtn from "./DataRequestBtn";
import DataRequestDescription from "./DataRequestDescription";
import DataRequestHeader from "./DataRequestHeader";
import DataRequestType from "./DataRequestType";

const DataRequest = ({id, type, fileType, dataType, description, requester, status, data}) => {
    if(type == 'on-chain'){
        return (
            <div class="DataRequest flex flex-col gap-y-2 justify-between bg-white py-3 px-4 rounded-md">
                <DataRequestType Type={type} />
                <DataRequestHeader Type={type}  Id={id} FileType={fileType} Status={status} />
                <DataRequestDescription Description={description} />
                <div>
                    <h2>Requested from: <span className="font-semibold">{requester}</span> </h2>
                </div>

                <DataRequestBtn FileUrl={data.fileUrl} FileSize={data.fileSize} />

            </div>
        )
    }

// *******************************************************************

//for off chain modify the card info
//add smooth animtation to to set an appointment form
// switch between roles

// *******************************************************************


    else if(type == 'off-chain'){
        return (
            <div class="DataRequest flex flex-col gap-y-2 justify-between bg-white py-3 px-4 rounded-md">
                <DataRequestType Type={type} />
                <DataRequestHeader Type={type} Id={id} Status={status} DataType={dataType} />
                <DataRequestDescription Description={description} />
                <div>
                    <h2>Requested from: <span className="font-semibold">{requester}</span> </h2>
                </div>

                <DataRequestBtn FileUrl={data.fileUrl} FileSize={data.fileSize} />

            </div>
        )
    }
    
}

export default DataRequest;