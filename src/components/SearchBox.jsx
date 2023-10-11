"use client"
import { useRouter } from "next/navigation";
import React,{useState} from "react";

export default function SearchBox() {
    const [search, setSearch] = useState("")
    const router =useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`)
        setSearch("")
    }
  return (
    <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center">
      <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Keyword..."
        className="w-full h-14 rounded-sm outline-none bg-transparent flex-1"
      />
      <button disabled={!search} type="submit" className="text-amber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
}
