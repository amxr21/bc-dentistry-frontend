import DetailInfo from "./DetailInfo"

const Allergies = ({allergyDetails}) => {
    return (
        <div className="allergies flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">Allergies</h1>
            <div className="info grid grid-cols-3">
                <DetailInfo header={'Allergy id'} info={allergyDetails.id} />
                <DetailInfo header={'Name'} info={allergyDetails.name} />
                <DetailInfo header={'Description max-w-full'} info={allergyDetails.description} />
            </div>
        </div>
    )
}

export default Allergies;