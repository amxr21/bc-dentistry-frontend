import DentalChart from "./DentalChart";
import DetailInfo from "./DetailInfo";

const DentalRecord = ({dentalDetails}) => {
    return (
        <div className="DentalRecord bg-white rounded-md flex gap-x-10 items-left flex flex-col gap-y-6 w-full px-16 py-6">
            <h1 className="text-3xl font-bold">Dental Record</h1>
            <div className="info grid grid-cols-6 gap-y-1 gap-x-2">
                {
                    Object.entries(dentalDetails).map((detail) => {
                        return <DetailInfo classes={' '} header={detail[0]} info={detail[1]} />
                    })
                }
            </div>
            <DentalChart />
        </div>
    )
}

export default DentalRecord;