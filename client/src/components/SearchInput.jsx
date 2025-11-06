import { IoSearch } from "react-icons/io5";

export default function SearchInput({ value, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="rounded-2xl border-2 border-green-700 flex items-center gap-2 relative w-1/2">
            <input className="rounded-2xl h-full w-full py-3 pl-5 pr-16 outline-green-900" type="text" name="domain" value={value} onChange={onChange} />
            <button title="Clique para pesquisar" disabled={!value} type="submit" className={`transition absolute right-0 top-0 py-3 px-5 cursor-pointer disabled:cursor-not-allowed text-green-700 hover:text-green-800 disabled:text-gray-400`}>
                <IoSearch className="h-[21px]" />
            </button>
        </form>
    )
}