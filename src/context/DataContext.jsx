import { createContext, useState } from "react";

export const DataContext = createContext({});

export default function DataProvider({children}){
    // funktioner som ska delas
    const [names, _] = useState(['Jens', 'David', 'Oskar', 'Emil', '威哈', 'Nyat']);
    return (
        <DataContext.Provider value={{names}}>
            {children}
        </DataContext.Provider>
    )
}