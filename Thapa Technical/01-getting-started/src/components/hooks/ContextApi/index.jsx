import { createContext, useContext, use } from "react";

// Step: 1 (Creating context)
export const BioContext = createContext();

// Step: 2 (Provider)
export const BioProvider = ({ children }) => {

    const myName = "Anand"
    const myAge = "25"

    return (
        <BioContext.Provider value={{ myName, myAge }}>
            {children}
        </BioContext.Provider>
    )
}


// Custom Hooks

export const useBioContext = () => {
    const context = useContext(BioContext)
    if(context === undefined){
        throw new Error("Component must be wrapper with BioProvider")
    }
    return context
}

// new "use" Hook in react-19

// export const useBioContext = () => {
//     const context = use(BioContext)
//     if(context === undefined){
//         throw new Error("Component must be wrapper with BioProvider")
//     }
//     return context
// }
