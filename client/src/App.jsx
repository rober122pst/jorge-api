import { useEffect, useState } from "react"
import SearchInput from "./components/SearchInput"
import DomainStatus from "./components/DomainStatus"

function App() {
  const [searchDomain, setSearchDomain] = useState("");
  const [searched, setSearched] = useState("");

  useEffect(() => {
    if (!searchDomain) {
      setSearched("");
    }
  }, [searchDomain]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearched(searchDomain.toLowerCase().trim());
  }

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-4xl font-bold my-8 text-gray-500">Caça dominios</h1>
      <SearchInput value={searchDomain} onChange={(e) => setSearchDomain(e.target.value)} onSubmit={handleSearchSubmit} />
      <DomainStatus searchDomain={searched} />
    </div>
  )
}

export default App
