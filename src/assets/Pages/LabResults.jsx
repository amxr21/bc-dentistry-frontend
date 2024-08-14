import { MainContainer } from "../components";
import LabResultsSection from "../Sections/LabResults/LabResults";
import LabResultsControllBar from "../Sections/LabResults/LabResultsControllBar";

import {FilterContextContainer} from "../Context/FiltersContext";


const LabResults = () => {


    return (
        <MainContainer Id={'Medicine'} classes={'w-full flex flex-col mb-24 gap-y-4'}>
            <FilterContextContainer>
                <LabResultsControllBar />
                <LabResultsSection />
            </FilterContextContainer>
        </MainContainer>
    )
}






export default LabResults;