import DataRequestBtn from "../../components/DataRequests/DataRequestBtn";
import DataRequestDescription from "../../components/DataRequests/DataRequestDescription";
import DataRequestHeader from "../../components/DataRequests/DataRequestHeader";
import DataRequestType from "../../components/DataRequests/DataRequestType";

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

                <DataRequestBtn DataStatus={status} FileContent={""} FileUrl={data.fileUrl} FileSize={data.fileSize} />

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

                <DataRequestBtn DataStatus={status} FileContent={'treatmentHistory'} FileUrl={''} FileSize={data.fileSize} />

            </div>
        )
    }
    
}

export default DataRequest;