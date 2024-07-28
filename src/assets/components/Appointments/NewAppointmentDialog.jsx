import InputComponent from '../InputComponent';


const NewAppointmentDialog = ({reff}) => {

    
    const submitNewAppointment = () => {
        reff.current.classList.replace('-translate-y-1/2', 'translate-y-[30em]')
        reff.current.classList.replace('opacity-100', 'opacity-0')
    }




    return (
            <div ref={reff} id='AddNewAppointmentDialog' className='fixed bg-white drop-shadow-xl w-[50em] h-fit inset-1/2 -translate-x-1/2 translate-y-[30em] z-50 opacity-100 rounded-md p-8'>
                <h2 className='text-3xl font-bold mb-8'>Add a new Appointment</h2>
                <div className="grid grid-cols-12 gap-x-4">
                    <div className="details col-span-8 grid grid-cols-2 gap-x-4 gap-y-4">
                        <InputComponent header={"Patient Name"} placeholder={"Name"} type={'text'} classes={''}/>
                        <InputComponent header={"Patient Name"} placeholder={"Name"} type={'text'} classes={''}/>
                        <InputComponent header={"Patient Name"} placeholder={"Name"} type={'text'} classes={''}/>
                        <InputComponent header={"Patient Name"} placeholder={"Name"} type={'text'} classes={''}/>
                    </div>
                    <div className='bg-red-800 col-span-4'>dad</div>
                </div>
                <button onClick={submitNewAppointment} className='bg-blue-950 text-white p-3 w-64 rounded-md my-6'>Request a new appointment</button>
            </div>
    )
}

export default NewAppointmentDialog;