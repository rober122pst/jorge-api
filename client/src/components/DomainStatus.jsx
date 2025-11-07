import { useEffect, useState } from "react";
import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'

export default function DomainStatus({ searchDomain }) {
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiUrl = "https://brasilapi.com.br/api/registrobr/v1/";
        
    useEffect(() => {
        if (searchDomain) {
            setLoading(true);
            setSearchResult(null);
            fetch(`${apiUrl}${searchDomain}`)
            .then(res => res.json())
            .then(data => {
                setSearchResult(data);
            })
            .catch(err => { 
                console.error("Error fetching data:", err);
                setSearchResult({ error: "Failed to fetch data" })
            })
            .finally(() => setLoading(false));
        }

    }, [searchDomain]);

    return (
        <div className={`flex flex-col gap-5 my-16 mx-auto rounded-2xl p-10 shadow-2xl w-1/2 ${!searchDomain ? 'scale-y-0' : 'scale-y-100'} transition duration-300 bg-white`}>
            {loading && (
                <div className="flex justify-center">
                    <DotPulse size={30} />
                </div>
            )}
            {searchResult && searchDomain && ( 
                <>
                    <div className="p-5 border-b border-b-gray-300">
                        <h1 className="text-center text-5xl font-light">{searchResult.fqdn}</h1>
                        <h1 className="text-center text-3xl font-light mt-1.5">Domínio {searchResult.status === "REGISTERED" ? <span className="text-red-500">não disponível para uso</span> : <span className="text-green-500">disponível para uso</span>}.</h1>
                    </div>
                    {searchResult.suggestions && searchResult.suggestions.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-light">Sugestões de domínios disponíveis</h2>
                            <ul className="max-h-60 overflow-y-auto">
                                {searchResult.suggestions.map((suggestion, index) => (
                                    <li key={index} className="text-xl py-3 border-b border-b-transparent transition hover:border-b-green-700 cursor-pointer">{searchDomain.split('.')[0]}.<b>{suggestion}</b></li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )
            
            }
        </div>
    );
}