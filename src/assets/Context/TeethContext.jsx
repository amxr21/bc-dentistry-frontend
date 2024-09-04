import { createContext, useState } from "react";

export const TeethContext = createContext();

export const TeethContextContainer = ({children}) => {
    const [toothSite, setToothSite] = useState(0);
 
    // console.log('Tooth site is:', toothSite);
    
    return (
        <TeethContext.Provider value={{toothSite, setToothSite}}>
            {children}
        </TeethContext.Provider>
    )
}