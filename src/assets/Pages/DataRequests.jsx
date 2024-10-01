import DataRequestsData from "../../../dataRequests.js";
import DataRequest from "../Sections/DataRequests/DataRequest.jsx";

const DataRequests = () => {
    console.log(DataRequestsData);




    return (
        <div id="DataRequests" className="my-6">
            <h2 className="text-3xl font-bold mb-6">{`Data Requests (${DataRequestsData.length})`}</h2>
            <div className="data-requests-section grid grid-cols-4 gap-4">
                {
                    DataRequestsData.map((request) => {
                        return (
                            <DataRequest
                                id={request.requestId}
                                type={request.type}
                                dataType={request?.dataType}
                                fileType={request?.fileType}
                                description={request.description}
                                requester={request.requester}
                                status={request.status}
                                data={request.data}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataRequests;