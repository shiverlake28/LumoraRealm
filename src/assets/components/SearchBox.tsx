import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import { useState } from "react";
const TrendingSearches = [
    {name:"Avengers",img:"marvel.jpg"},
    {name:"Stranger Things",img:"strangers_thing.jpg"},
    {name:"Wednesday",img:"wednesday.jpg"},
    {name:"The Batman",img:"Batman.jpg"},
    {name:"Formula 1",img:"Formula1.jpg"}
]
const TopMatch = [
    {name:"Avengers",img:"marvel.jpg"},
    {name:"Stranger Things",img:"strangers_thing.jpg"},
    {name:"Wednesday",img:"wednesday.jpg"},
    {name:"The Batman",img:"Batman.jpg"},
    {name:"Formula 1",img:"Formula1.jpg"}
]
const MorePicks = [
    {name:"Avengers",img:"marvel.jpg"},
    {name:"Stranger Things",img:"strangers_thing.jpg"},
    {name:"Wednesday",img:"wednesday.jpg"},
    {name:"The Batman",img:"Batman.jpg"},
    {name:"Formula 1",img:"Formula1.jpg"}
]

function SearchBox(){
    function HandleSearch(){
        if (!Search.trim()){
            return
        }
        else{
            SetRecentSearches((prev) => [Search , ...prev].slice(0,3))
            SetHasSearched(true)
        }

    }
    const [HasSearched,SetHasSearched] = useState(false)
    const [RecentSearches,SetRecentSearches] = useState<string[]>([])
    const [Search,SetSearch] = useState("")

    return(
        <div className="w-full min-h-screen font-space flex flex-col justify-start p-15 pt-10 items-start gap-10 bg-linear-to-b from-[rgb(20,48,54)] via-[rgb(35,45,57)] to-[rgb(58,39,57)]">
            {/*Searchbar*/}
            <div className="w-full h-auto p-2 flex justify-start items-end pb-3 gap-10 bg-[rgb(24,26,21)]/50 border-2 border-gray-300/70 rounded-3xl text-[rgb(226,218,218)]/80 ">
                <Icon icon="gala:search" width="50" height="50" className=" -scale-x-100 ml-2"/>
                <div className="flex-1 "><input type="text" value={Search} onChange={(e)=> SetSearch(e.target.value)} onKeyDown={(e)=>{ if (e.key ==="Enter"){HandleSearch()}}} placeholder="Search movies,series,sports,actors..." className="w-full text-2xl placeholder:text-[rgb(139,137,137)] outline-none" /></div>
                {Search && 
                < X className="w-10 h-10 cursor-pointer" onClick={() => SetSearch("")}/>}
            </div>
            {/*Recent Searches*/}
            {RecentSearches.length > 0 &&
            <div className="space-y-6">
            <h1 className="text-[rgb(235,231,220)]/95 text-lg sm:text-xl">Recent Searches</h1>
            <div className="w-fit h-auto p-1 gap-4 items-center bg-[rgb(24,26,21)]/40 flex  text-[rgb(226,218,218)]/80 border-2 border-gray-300/70   rounded-xl text-lg ">
                {RecentSearches.map((search) => (
            <div className="cursor-pointer px-2 flex  bg-[rgb(24,27,31)]/70 rounded-lg border border-gray-300/20">
                {search} 
            </div> 
        ))}<X className="h-4 w-4 mt-1" onClick={()=>{SetRecentSearches([])}} />
            </div></div>}
             {/*Trending Searches  */}
            {!HasSearched && <div className="flex flex-col gap-10">
            <h1 className="text-[rgb(235,231,220)]/95 text-lg sm:text-xl">Trending Searches</h1> 
            <div> 
                <div className="h-auto w-full gap-3 flex "> {TrendingSearches.map((search) => (
            <div className="flex flex-col  justify-end h-60 w-50 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-blue-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3">{search.name}</div>
            </div>  
        ))}</div>
                
            </div> </div>}
            {/* Top Match */}
            {HasSearched && <div className="flex flex-col gap-10">
                <h1 className="text-[rgb(235,231,220)]/95 text-lg sm:text-xl">Top Match</h1>
            <div>
                
                <div className="h-auto w-full gap-3 flex "> {TopMatch.map((search) => (
            <div className="flex flex-col  justify-end h-60 w-50 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-blue-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3">{search.name}</div>
            </div>  
        ))}</div>
                
            </div>
            
            {/* More Picks */}
            <div>
                <h2></h2>//More Picks
                <div></div>//More picks card + poster
            </div></div>}

            {/* Creator details */}
            <div>
                //Creator details and info
            </div>
            
        </div>

    )
}
export default SearchBox