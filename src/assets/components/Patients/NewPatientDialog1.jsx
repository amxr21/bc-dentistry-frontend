import Progress from "./Progress";

const NewPatientDialog1 = () => {
    return (
        <div className="p-12 bg-[#000834] text-white">
            <h2 className='text-5xl font-bold mb-8 col-span-4 '>New Patient</h2>
            <div className="progress-line flex flex-col justify-around h-80">
                <Progress progressName={'Profile Info'} />
                <Progress progressName={'Medical Record'} />
                <Progress progressName={'Insurance'} />
            </div>
        </div>
    )
}

export default NewPatientDialog1;