import LabResult from "../../components/LabResults/LabResult";
import Lab from "../../../../lab"

import { FiltersContext } from "../../Context/FiltersContext";
import { useContext } from "react";

const LabResultsSection = () => {
    const {filters, setFilters} = useContext(FiltersContext);
    const {sortDate, setSortDate} = useContext(FiltersContext);

    const today = new Date();
    console.log(today.getDate());


    return (
        <div className="lab-results-section flex col-span-12 rounded-md w-full items-center grid grid-cols-3 2xl:grid-cols-4 gap-6 justify-end">
            {
                Lab.filter((l) => filters.includes(l.status) || filters.length == 0 ).map((l) => {
                    return <LabResult key={l['test-id']} labTestId={l['test-id']} testName={l['test-name']} siteId={l['site-id']} status={l['status']} caseId={l['case-id']} orderId={l['order-id']} discipline={l['discipline']} date={l['last-updated']} />
                })
            }
        </div>
    )
}

export default LabResultsSection;