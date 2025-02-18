import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext();

export default function DataProvider({children}) {
    const storedUrl = localStorage.getItem("url");
    const [url, setUrl] = useState(storedUrl ? storedUrl : 'null');
    const { data, loading, error } = useFetch(url);

    return (
        <>
            <DataContext.Provider value={{data, loading, error, url, setUrl }}>
                {children}
            </DataContext.Provider>
        </>
    );

}

