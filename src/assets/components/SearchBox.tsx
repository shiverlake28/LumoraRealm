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

        
        <div className="w-full min-h-screen font-space flex flex-col justify-start p-3 min-[640px]:p-15 min-[640px]:pt-10 items-start gap-4 min-[640px]:gap-10 3xl:p-24 3xl:pt-14 3xl:gap-12 4xl:p-32 4xl:pt-20 4xl:gap-16 bg-linear-to-b from-[rgb(20,48,54)] via-[rgb(35,45,57)] to-[rgb(58,39,57)]">
            {/*Searchbar*/}
            <div className="w-full h-auto p-2 4xl:p-6 flex justify-start items-end pb-3 4xl:pb-6 gap-2 min-[640px]:gap-10 4xl:gap-14 bg-[rgb(24,26,21)]/50 border-2 border-gray-300/70 rounded-3xl text-[rgb(226,218,218)]/80 ">
                <Icon icon="gala:search" width="50" height="50" className=" -scale-x-100 ml-2 w-8 h-8 min-[640px]:w-12.5 min-[640px]:h-12.5 3xl:w-16 3xl:h-16 4xl:w-24 4xl:h-24"/>
                <div className="flex-1 "><input type="text" value={Search} onChange={(e)=> SetSearch(e.target.value)} onKeyDown={(e)=>{ if (e.key ==="Enter"){HandleSearch()}}} placeholder={IsMobile ? "Search" : "Search movies,series,sports,actors..."} className="w-full text-sm min-[360px]:text-base min-[640px]:text-2xl 3xl:text-3xl 4xl:text-5xl placeholder:text-[rgb(139,137,137)] outline-none" /></div>
                {Search && 
                < X className="w-6 h-6 min-[640px]:w-10 min-[640px]:h-10 3xl:w-13 3xl:h-13 4xl:w-18 4xl:h-18 cursor-pointer" onClick={() => SetSearch("")}/>}
            </div>
            {/*Recent Searches*/}
            {RecentSearches.length > 0 &&
            <div className="space-y-6 4xl:space-y-10">
            <h1 className="text-[rgb(235,231,220)]/95 text-base min-[640px]:text-xl min-[1500px]:text-2xl 3xl:text-3xl 4xl:text-6xl">Recent Searches</h1>
            <div className="w-fit min-[640px]:w-fit h-auto p-1 4xl:p-3 gap-2 min-[640px]:gap-4 4xl:gap-6 items-center bg-[rgb(24,26,21)]/40 flex flex-wrap text-[rgb(226,218,218)]/80 border-2 border-gray-300/70 rounded-xl text-sm min-[640px]:text-lg min-[1500px]:text-xl 3xl:text-2xl 4xl:text-4xl ">
                {RecentSearches.map((search) => (
            <div className="cursor-pointer px-2 py-1 min-[640px]:py-0 4xl:px-4 4xl:py-2 flex  bg-[rgb(24,27,31)]/70 rounded-lg border border-gray-300/20">
                {search} 
            </div> 
        ))}<X className="h-4 w-4 min-[640px]:h-5 min-[640px]:w-5 3xl:h-6 3xl:w-6 4xl:h-9 4xl:w-9 mt-1" onClick={()=>{SetRecentSearches([])}} />
            </div></div>}
             {/*Trending Searches  */}
            {!HasSearched && <div className="flex flex-col gap-6 min-[640px]:gap-10 4xl:gap-16">
            <h1 className="text-[rgb(235,231,220)]/95 text-base min-[640px]:text-xl min-[1500px]:text-2xl 3xl:text-3xl 4xl:text-6xl">Trending Searches</h1> 
            <div> 
                <div className="h-auto w-full gap-2 min-[640px]:gap-3 4xl:gap-6 flex flex-wrap "> {TrendingSearches.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 min-[640px]:w-50 min-[640px]:h-60 min-[640px]:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 3xl:w-70 3xl:h-72 4xl:w-136 4xl:h-120 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-pink-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3 4xl:px-6 4xl:py-6 4xl:text-4xl">{search.name}</div>
            </div>  
        ))}</div>
                
            </div> </div>}
            {/* Top Match */}
            {HasSearched && <div className="flex flex-col gap-6 min-[640px]:gap-10 4xl:gap-16">
                <h1 className="text-[rgb(235,231,220)]/95 text-base min-[640px]:text-xl min-[1500px]:text-2xl 3xl:text-3xl min-[2560px]:text-6xl">Top Match</h1>
            <div>
                
                <div className="h-auto w-full gap-2 min-[640px]:gap-3 4xl:gap-6 flex flex-wrap "> {TopMatch.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 min-[640px]:w-50 min-[640px]:h-60 min-[640px]:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 3xl:w-70 3xl:h-72 4xl:w-136 4xl:h-120 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-amber-900/85 via-black/50 to-transparent rounded-b-lg px-2 py-3 4xl:px-6 4xl:py-6 4xl:text-4xl">{search.name}</div>
            </div>  
        ))}</div>
                
            </div></div>}
            
            {/* More Picks */}
            <div> 
                <div className="flex flex-col gap-6 min-[640px]:gap-10 4xl:gap-16">
                <h1 className="text-[rgb(235,231,220)]/95 text-base min-[640px]:text-xl min-[1500px]:text-2xl 3xl:text-3xl 4xl:text-6xl">More Picks</h1>
            <div>
                
                <div className="h-auto w-full gap-2 min-[640px]:gap-3 4xl:gap-6 flex flex-wrap "> {MorePicks.map((search) => (
            <div className="flex flex-col  justify-end w-[45%] min-w-30 h-40 min-[640px]:w-50 min-[640px]:h-60 min-[640px]:min-w-0 min-[1500px]:w-60 min-[1500px]:h-68 3xl:w-70 3xl:h-72 4xl:w-136 4xl:h-120 border border-gray-400 hover:border-white hover:shadow-sm shadow-white rounded-lg bg-[rgb(24,26,21)]/50 text-white font-semibold text-center cursor-pointer  bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: `url(${search.img})` }} key={search.name}>
                <div className="w-full bg-linear-to-t from-indigo-900/70 via-black/50 to-transparent rounded-b-lg px-2 py-3 4xl:px-6 4xl:py-6 4xl:text-4xl">{search.name}</div>
            </div>  
        ))}</div>
                
            </div></div>
            </div>            
            </div>
        {/* Creator details */}
        <footer className="w-full">
            <div className="w-full h-auto border-t border-t-white/40 bg-slate-900">
                <div className="text-gray-500 w-full flex flex-col items-center">
                    <div className="w-full flex justify-between items-center p-2 min-[2560px]:p-8 text-[clamp(8px,1vw+6px,18px)] min-[2560px]:text-[clamp(24px,2vw+16px,54px)]">
                    <div className="min-w-0 max-w-[50%]">Created by - Student of Technocrats institute of technology</div>
                    <div className="min-w-0 max-w-[50%] text-right">Post - Front end developer</div>
                    </div>
                    <div className="w-full flex justify-between items-center p-2 min-[2560px]:p-8 text-[clamp(8px,1vw+6px,18px)] min-[2560px]:text-[clamp(24px,2vw+16px,54px)]">
                        <div className="min-w-0 max-w-[50%]">Room partner of Jay upwanshi / Nalla</div>
                        <div className="min-w-0 max-w-[50%] text-right">Currently BCA is pursuing us </div>
                    </div>
                    <div className="w-30 h-30 min-[450px]:w-40 min-[450px]:h-40 min-[640px]:w-50 min-[640px]:h-50 min-[1920px]:w-64 min-[1920px]:h-64 min-[2560px]:w-md min-[2560px]:h-112 bg-[url('LumoraRealm-nobg.png')] bg-contain bg-center bg-no-repeat"></div>
                    <div className="w-full flex justify-between items-center p-2 min-[2560px]:p-8 text-[clamp(8px,1vw+6px,18px)] min-[2560px]:text-[clamp(24px,2vw+16px,54px)]" >
                    <div className="min-w-0 max-w-[50%]">Born in 2006</div>
                    <div className="min-w-0 max-w-[50%] text-right">Proud father of anuraj,vansh,rudra,prince and 2 others</div>
                    </div>
                    <div className="w-full flex justify-between items-center p-2 min-[2560px]:p-8 text-[clamp(8px,1vw+6px,18px)] min-[2560px]:text-[clamp(24px,2vw+16px,54px)]" >
                    <div className="min-w-0 max-w-[50%]">Used React.js + vite and tailwind  for development</div>
                    <div className="min-w-0 max-w-[50%] text-right">Used OpenCode for Responsiveness</div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
export default SearchBox