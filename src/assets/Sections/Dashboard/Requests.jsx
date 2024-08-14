import Data from "../../../../data"
import AppointmentRequest from "../../components/Dashboard/AppointmentRequest"

const Requests = () => {
    let a = []
    let appointmentComponent;

    Data.forEach((data) => {
        const allPendings = data.appointments.filter((app) =>  app.status == "pending" )
        const pendingAppointmentName = data.name;
        const ap = {};
        ap[pendingAppointmentName] =  allPendings
        a.push(ap)
    })

    return (
        <div id="Requests" className="bg-white rounded-md p-4 col-span-4 w-full h-fit">
            <h1 className="text-2xl font-bold mb-3">Appointments requests</h1>
            <div className="flex flex-col gap-y-4">
                {
                    a.map((req) => {
                        if(Object.values(req)[0].length != 0){
                                appointmentComponent = Object.values(req)[0].map((reqD, index) => {
                                    return <AppointmentRequest key={index} patientName={Object.keys(req)[0]} date={reqD.date} time={reqD.time} type={reqD.type} status={"p"} />
                                })
                                return appointmentComponent;
                            }

                    })
                }
            </div>
        </div>
    )
}



// if(req.length != 0){
//     appointmentComponent = req.map((reqD) => {
//         return <AppointmentRequest patientName={'a'} date={reqD.date} time={reqD.time} type={reqD.type} status={"p"} />
//     })
//     // console.log(req);
//     return appointmentComponent;
// }



export default Requests;