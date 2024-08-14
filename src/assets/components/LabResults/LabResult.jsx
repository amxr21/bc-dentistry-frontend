import DetailInfo from "../Patient/DetailInfo"

const LabResult = ({labTestId, testName, orderId, caseId, discipline, siteId, status, date}) => {
    return (
        <div className="lab-results p-4 rounded-md bg-white h-[22em]">
            <p className="lab-test-id text-lg">Lab test id: #{labTestId}</p>
            <div className="main-header flex flex-col gap-y-3">
                <h2 className="test-name text-[1.6em] font-bold">{testName}</h2>
                <div className="order-case flex justify-between">
                    <div className="order flex flex-col w-24 text-md">
                        <p>Order id:</p>
                        <p>#{orderId}</p>
                    </div>
                    <div className="case flex flex-col w-24 text-md">
                        <p>Case id:</p>
                        <p>#{caseId}</p>
                    </div>
                </div>
                <div className="lab-details">
                    <h4 className="text-xl font-semibold mb-2">Lab details</h4>
                    <div className="grid grid-cols-2 gap-3">
                        <DetailInfo header={'Discipline'} info={discipline} />
                        <DetailInfo header={'Site Id'} info={siteId} />
                        <DetailInfo header={'Status'} info={status} />
                        <DetailInfo header={'Date'} info={date} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LabResult;