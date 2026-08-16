import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import { useState } from "react";
function SearchBox(){
    function HandleSearch(){
        
    }
    const [RecentSearches,SetRecentSearches] = useState([])
    const [Search,SetSearch] = useState("")

    return(
        
        <div className="w-full min-h-screen font-space flex flex-col justify-start p-15 pt-10 items-start gap-10 bg-linear-to-b from-[rgb(20,48,54)] via-[rgb(35,45,57)] to-[rgb(58,39,57)]">
            {/*Searchbar*/}
            <div className="w-full h-auto p-2 flex justify-start items-end pb-3 gap-10 bg-[rgb(24,26,21)]/50 border-2 border-gray-300/70 rounded-3xl text-[rgb(226,218,218)]/80 ">
                <Icon icon="gala:search" width="50" height="50" className=" -scale-x-100 ml-2"/>
                <div className="flex-1 "><input type="text" onChange={(e)=> SetSearch(e.target.value)} placeholder="Search movies,series,sports,actors..." className="w-full text-2xl placeholder:text-[rgb(139,137,137)] outline-none" /></div>
                < X className="w-10 h-10 cursor-pointer"/>
            </div>
            {/*Recent Searches*/}
            <div>
            <h1 className="text-[rgb(235,231,220)]/95 text-lg sm:text-xl">Recent Searches</h1>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div></div>
             {/*Trending Searches  */}
            <div>
                <div></div>
                <div></div>//The trending searches
                <div></div>
                <div></div>
            </div>
            {/* Search result */}
            <div>
                <h2></h2>//Top Match
                <div></div>//Top match card + poster
            </div>
            {/* More Picks */}
            <div>
                <h2></h2>//More Picks
                <div></div>//More picks card + poster
            </div>

            {/* Creator details */}
            <div>
                //Creator details and info
            </div>
            
        </div>

    )
}
export default SearchBox