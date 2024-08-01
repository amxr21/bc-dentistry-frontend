
import NewPatientDialog1 from "./NewPatientDialog1";
import NewPatientDialog2 from "./NewPatientDialog2";

const NewPatientDialog = () => {


    return (
        <div id='AddNewPatientDialog' className='fixed bg-white drop-shadow-xl w-[68em] h-fit inset-1/2 -translate-x-1/2 translate-y-[30em] z-50 rounded-md opacity-0 grid grid-cols-12 gap-x-6 overflow-hidden' style={{gridTemplateColumns: '3fr 7fr'}}>
            <NewPatientDialog1 />
            <NewPatientDialog2 />

        </div>
    )
}


export default NewPatientDialog;