import CenterSide from "../../images/teeth/t_1a.svg";
import PartSide from "../../images/teeth/t_2a.svg";
import SideSide from "../../images/teeth/t_3a.svg";
import UpSide from "../../images/teeth/t_3a.svg";
import { useRef } from "react";
const DentalChart = () => {

    const aaa = useRef();

    const changeColorOnEnter = (e) => {
        aaa.current.style.fill = 'red'
        e.target.style.fill = "blue"
    }
    const changeColorOnLeave = (e) => {
        e.target.style.fill = "white"
    }



    return (
        <div className="dental-chart w-full flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold">Chart</h2>
            <div className="chart bg-gray-200 w-full ">
                {/* <img src={CenterSide} alt="" /> */}
                <div className="flex">
                    <div className="centerPart relative z-0">
                        <svg className="h-40 " id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 311.14"><rect width="400" height="311.14" style={{fill:"none", stroke: '#000', strokeLnecap:'round', strokeLinejoin: 'round', strokeWidth:"3px"}}/></svg>

                        <div  className="rotate-180 top absolute top-0 w-40 z-50 bg-red-500">
                            <svg  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 126.86"><polygon points="98.69 0 301.37 0 400 126.8 400 126.86 0 126.86 98.69 0" style={{fill:'white', stroke:'#000',strokeLinecap:'round',strokeLinejoin:'round', strokeWidth:'3px'}}/></svg>
                        </div>

                        <div className="side absolute top-0 z-50">
                            <svg ref={aaa} onMouseEnter={changeColorOnEnter} className="h-40" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.86 400"><polygon points="126.86 98.69 126.86 301.37 0.06 400 0 400 0 0 126.86 98.69" style={{fill :'white', stroke:"#000", strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:"3px"}}/></svg>
                        </div>

                        <div className="side absolute top-0 right-0 rotate-180 z-50">
                            <svg className="h-40" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.86 400"><polygon points="126.86 98.69 126.86 301.37 0.06 400 0 400 0 0 126.86 98.69" style={{fill :'white', stroke:"#000", strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:"3px"}}/></svg>
                        </div>

                        

                    </div>
                    <svg className="w-40" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 82.15"><polygon points="252.89 0 147.11 0 0 82.15 400 82.15 252.89 0" style={{fill:'white', stroke:'#000', strokeLinecap:'round', strokeLinejoin:'round', strokeWidth:"3px"}}/></svg>

                </div>
            </div>
        </div>
    )
}

export default DentalChart;