import DaySummary from "./DaySummary";

const daysInMonth = {
    1: 31, // January
    2: 28, // February (common year)
    3: 31, // March
    4: 30, // April
    5: 31, // May
    6: 30, // June
    7: 31, // July
    8: 31, // August
    9: 30, // September
    10: 31, // October
    11: 30, // November
    12: 31  // December
  };

const BriefCalendar = () => {
    
    let a = 0
    let days = [];
    for(let i = 0; i < 10; i++){
        let d = new Date();
        if(parseInt(d.getDate() + i) <= daysInMonth[d.getMonth()]) {
            days.push(d.getDate() + i);
            a++;
        }
        else{
            days.push(`0${i+1-a}`);
        }
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