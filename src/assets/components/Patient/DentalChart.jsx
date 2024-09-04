import { useRef } from "react";
import Tooth from "./Tooth";
const DentalChart = ({dentalTeethDetails}) => {

    const aaa = useRef();


    console.log(Object.values(dentalTeethDetails['teeth']));
    return (
        <div className="dental-chart w-fit flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold">Chart, id {dentalTeethDetails['id']}</h2>
            <div className="chart grid gap-0 bg-gray-200 w-full" style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr '}}>
                {/* <img src={CenterSide} alt="" /> */}

                {
                    Object.values(dentalTeethDetails['teeth']).map((tooth) => {
                        
                        return <Tooth
                                    key={ Math.random(0, 9)}
                                    category={tooth['Category']}
                                    code={tooth['Code']}
                                    site={tooth['Site']}
                                    suf={tooth["Suf"]}
                                />
                    })
                }
            </div>
        </div>
    )
}

export default DentalChart;