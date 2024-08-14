import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FilterContextContainer = ({children}) =>{
    const [filters, setFilters] = useState([])
    const [sortPeriod, setSortPeriod] = useState('day')



    return (
        <FiltersContext.Provider value={{filters, setFilters, sortPeriod, setSortPeriod}} >
            {children}
        </FiltersContext.Provider>
    )
}
