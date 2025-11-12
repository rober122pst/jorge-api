import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearch } from "../contexts/SearchDomainContext";

export default function SearchInput({ value, onChange, onSubmit }) {
    const { data } = useSearch();
    return (
        <form onSubmit={onSubmit} className={`rounded-2xl border-2 flex items-center gap-2 relative w-1/2 ${data ? (data.status === 'REGISTERED' ? 'border-red-500' : 'border-green-500') : 'border-gray-500'}`}>
            <input className={`rounded-2xl h-full w-full py-3 pl-5 pr-16 ${data ? (data.status === 'REGISTERED' ? 'outline-red-700' : 'outline-green-700') : 'outline-gray-700'}`} type="text" name="domain" value={value} onChange={onChange} />
            <button aria-hidden title="Clique para pesquisar" disabled={!value} type="submit" className={`transition absolute right-0 top-0 py-3 px-5 cursor-pointer disabled:cursor-not-allowed text-sky-800 hover:text-sky-900 disabled:text-gray-400`}>
                <IoSearch className="h-[21px]" />
            </button>
        </form>
    )
}