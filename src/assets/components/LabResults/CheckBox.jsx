import { useContext, useEffect, useRef, useState } from "react";
import { FiltersContext } from "../../Context/FiltersContext";


const CheckBox = ({label, id, reff}) => {
    const [checked, setChecked] = useState(false)
    const {filters, setFilters } = useContext(FiltersContext)
    const a = useRef()


    const handle = () => {
        setChecked(!checked)
    }



    useEffect(() => {
        if(checked){
            if(filters.includes(a.current.lastElementChild.textContent)){
                setFilters([...filters])
            }
            else{
                setFilters([...filters, a.current.lastElementChild.textContent])
            }
        }
        else{
            setFilters([...filters.filter((f) => f != a.current.lastElementChild.textContent)])
        }
    }, [checked])


    return (
        <div ref={a} className="chbx1 flex gap-x-2 items-center">
            <input onChange={handle} className="w-4 h-4" type="checkbox" name={id} id={id} />
            <label htmlFor="UnderProgress">{label}</label>
        </div>
    )
}

export default CheckBox;