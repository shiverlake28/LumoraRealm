import { Icon } from "@iconify/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
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
    const [IsMobile,SetIsMobile] = useState(window.innerWidth < 450)

    useEffect(()=>{
        const onResize = ()=> SetIsMobile(window.innerWidth < 450)
        window.addEventListener("resize", onResize)
        return ()=> window.removeEventListener("resize", onResize)
    }, [])

    return(
        <div>

        
        <div className="w-full min-h-screen font-space flex flex-col justify-start p-3 sm:p-15 sm:pt-10 items-start gap-4 sm:gap-10 min-[1920px]:p-24 min-[1920px]:pt-14 min-[1920px]:gap-12 bg-linear-to-b from-[rgb(20,48,54)] via-[rgb(35,45,57)] to-[rgb(58,39,57)]">
            {/*Searchbar*/}
            <div className="w-full h-auto p-2 flex justify-start items-end pb-3 gap-2 sm:gap-10 bg-[rgb(24,26,21)]/50 border-2 border-gray-300/70 rounded-3xl text-[rgb(226,218,218)]/80 ">
                <Icon icon="gala:search" width="50" height="50" className=" -scale-x-100 ml-2 w-8 h-8 sm:w-12.5 sm:h-12.5 min-[1920px]:w-16 min-[1920px]:h-16"/>
                <div className="flex-1 "><input type="text" value={Search} onChange={(e)=> SetSearch(e.target.value)} onKeyDown={(e)=>{ if (e.key ==="Enter"){HandleSearch()}}} placeholder={IsMobile ? "Search" : "Search movies,series,sports,actors..."} className="w-full text-sm min-[360px]:text-base sm:text-2xl min-[1920px]:text-3xl placeholder:text-[rgb(139,137,137)] outline-none" /></div>
                {Search && 
                < X className="w-6 h-6 sm:w-10 sm:h-10 min-[1920px]:w-13 min-[1920px]:h-13 cursor-pointer" onClick={() => SetSearch("")}/>}
            </div>
            {/*Recent Searches*/}
            {RecentSearches.length > 0 &&
            <div className="space-y-6">
            <h1 className="text-[rgb(235,231,220)]/95 text-base sm:text-xl min-[1500px]:text-2xl min-[1920px]:text-3xl">Recent Searches</h1>
            <div className="w-fit sm:w-fit h-auto p-1 gap-2 sm:gap-4 items-center bg-[rgb(24,26,21)]/40 flex flex-wrap text-[rgb(226,218,218)]/80 border-2 border-gray-300/70 rounded-xl text-sm sm:text-lg min-[1500px]:text-xl min-[1920px]:text-2xl ">
                {RecentSearches.map((search) => (
            <div className="cursor-pointer px-2 py-1 sm:py-0 flex  bg-[rgb(24,27,31)]/70 rounded-lg border border-gray-300/20">
                {search} 
            </div> 
        ))}<X className="h-4 w-4 sm:h-5 sm:w-5 min-[1920px]:h-6 min-[1920px]:w-6 mt-1" onClick={()=>{SetRecentSearches([])}} />
            </div></div>}
             {/*Trending Searches  */}
            {!HasSearched && <div className="flex flex-col gap-6 sm:gap-10">
            <h1 className="text-[rgb(235,231,220)]/95 text-base sm:text-xl min-[1500px]:text-2xl min-[1920px]:text-3xl">Trending Searches</h1> 
            <div> 
                <div className="h-auto w-full gap-2 sm:gap-3 flex flex-wrap "> {TrendingSearches.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 sm:w-50 sm:h-60 sm:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 min-[1920px]:w-70 min-[1920px]:h-72 min-[2560px]:w-85 min-[2560px]:h-80 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-pink-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3">{search.name}</div>
            </div>  
        ))}</div>
                
            </div> </div>}
            {/* Top Match */}
            {HasSearched && <div className="flex flex-col gap-6 sm:gap-10">
                <h1 className="text-[rgb(235,231,220)]/95 text-base sm:text-xl min-[1500px]:text-2xl min-[1920px]:text-3xl">Top Match</h1>
            <div>
                
                <div className="h-auto w-full gap-2 sm:gap-3 flex flex-wrap "> {TopMatch.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 sm:w-50 sm:h-60 sm:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 min-[1920px]:w-70 min-[1920px]:h-72 min-[2560px]:w-85 min-[2560px]:h-80 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-amber-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3">{search.name}</div>
            </div>  
        ))}</div>
                
            </div></div>}
            
            {/* More Picks */}
            <div> 
                <div className="flex flex-col gap-6 sm:gap-10">
                <h1 className="text-[rgb(235,231,220)]/95 text-base sm:text-xl min-[1500px]:text-2xl min-[1920px]:text-3xl">More Picks</h1>
            <div>
                
                <div className="h-auto w-full gap-2 sm:gap-3 flex flex-wrap "> {TopMatch.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 sm:w-50 sm:h-60 sm:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 min-[1920px]:w-70 min-[1920px]:h-72 min-[2560px]:w-85 min-[2560px]:h-80 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-indigo-900/70 via-black/50 to-transparent rounded-b-lg px-2 py-3">{search.name}</div>
            </div>  
        ))}</div>
                
            </div></div>
            </div>            
            </div>
        {/* Creator details */}
            <div className="w-full h-auto border-t border-t-white/40 bg-slate-900">
                <div className="text-gray-500 flex flex-col items-center ">
                    <div className="w-full flex justify-between p-2">
                    <div>Created by - Student of Technocrats institute of technology</div>
                    <div>Post - Front end developer</div>
                    </div>
                    <div className="w-full flex justify-between p-2">
                        <div>Room partner of Jay upwanshi / Nalla</div>
                        <div>Currently BCA is pursuing us </div>
                    </div>
                    <div className="w-50 h-50 bg-[url('LumoraRealm-nobg.png')] bg-contain"></div>
                    <div className="w-full flex justify-between p-2" >
                    <div >Born in 2006</div>
                    <div>Proud father of anuraj,vansh,rudra,prince and 2 others</div>
                    </div>
                    <div className="w-full flex justify-between p-2" >
                    <div >Used React.js + vite and tailwind  for development</div>
                    <div>Used OpenCode for Responsiveness</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBox