import { createContext, useContext, useState } from "react";

const SearchContext = createContext()
export function SearchProvider({children}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiUrl = "https://brasilapi.com.br/api/registrobr/v1/";

    const handleSearch = (searchDomain) => {
        if (searchDomain) {
            setLoading(true);
            setData(null);
            fetch(`${apiUrl}${searchDomain}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => { 
                console.error("Error fetching data:", err);
                setData({ error: "Failed to fetch data" })
            })
            .finally(() => setLoading(false));
        }else {
            setData(null);
        }

    };

    return (
        <SearchContext.Provider value={{data, loading, handleSearch}}>
            {children}
        </SearchContext.Provider>
    );  
}

export function useSearch(){
    return useContext(SearchContext)
}