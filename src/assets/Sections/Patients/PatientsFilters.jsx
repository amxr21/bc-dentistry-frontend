import { Filter } from "../../components";

const PatientsFilters = () => {
    return (
        <div id="Patients-filters" className="col-span-3 w-10/12 bg-white rounded-md p-4 h-[75vh]">
            <h2 className="text-2xl font-bold mb-2">Filters</h2>
            <Filter FilterId={'Appointment for'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
            <Filter FilterId={'Appointment for'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
            <Filter FilterId={'Appointment for'} FilterTitle={'Appointment for'} FilterLabels={['Case 1', 'Case 2', 'Case 3']} /> 
        </div>
    )
}

export default PatientsFilters;