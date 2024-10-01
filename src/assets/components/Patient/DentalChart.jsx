import { useRef, useContext } from "react";
import Tooth from "./Tooth";
import { TeethContext } from "../../Context/TeethContext";

const DentalChart = ({dentalTeethDetails}) => {

    const aaa = useRef();

    const {toothFraction, setToothFraction} = useContext(TeethContext);

    console.log(dentalTeethDetails);
    

    // console.log(Object.values(dentalTeethDetails['teeth']));
    return (
        <div className="dental-chart w-fit flex flex-col gap-y-4 max-w-10/12">
            {/* <h2 className="text-3xl font-semibold">Chart, id {dentalTeethDetails['id']}</h2> */}
            <div className="chart grid gap-0" style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr '}}>
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