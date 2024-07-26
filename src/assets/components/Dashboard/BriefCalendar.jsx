import DaySummary from "./DaySummary";

const BriefCalendar = () => {
    
    let days = [];
    for(let i = 0; i < 10; i++){
        let d = new Date();
        days.push(d.getDate() + i);
    }

    // console.log(days);
    return (
        <div id="BriefCalendar" className="flex flex-wrap justify-between gap-x-5 mb-6">
            <h1 className="text-2xl font-bold mb-3">Upcoming Appointments</h1>
            <div className="flex flex-wrap justify-between gap-x-5 gap-y-5 mb-6">
                {
                    days.map((day) => {
                        return <DaySummary key={day} dayDateD={day} />
                    })
                }
            </div>

        </div>
    )
}

export default BriefCalendar;