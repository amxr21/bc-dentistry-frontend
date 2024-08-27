import { Filter } from "../../components";

const PatientsFilters = () => {
    return (
        <div id="Patients-filters" className="bg-white rounded-md p-4 h-[78vh]">
            <h2 className="text-2xl font-bold mb-2">Filters</h2>
            <Filter FilterId={'1'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
            <Filter FilterId={'2'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
            <Filter FilterId={'3'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
        </div>
    )
}

export default PatientsFilters;