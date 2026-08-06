import { useState } from "react";
import { useEffect } from "react";
function SplashScreen(){
    const [ShowLogo, setShowLogo] = useState(false);
    const [ShowTitle, setShowTitle] = useState(false);
    const [ShowTagline, setShowTagline] = useState(false);
    const [FadeOut, setFadeOut] = useState(false);
    useEffect(() => {
    const timer = setTimeout(() => {
        setShowLogo(true);
    }, 1000);
    const titletimer = setTimeout(()=> setShowTitle(true),3000 );
    const taglinetimer = setTimeout(()=> setShowTagline(true),6000 );
    const fadeTimer = setTimeout(() => {
        setFadeOut(true);
    }, 100000000);

    
    return () => {
        clearTimeout(timer);
        clearTimeout(titletimer);
        clearTimeout(taglinetimer);
        clearTimeout(fadeTimer);
    
}}, []); 

    return(
        <div className={`font-cinzel w-full min-h-screen flex  flex-col text-xl sm:text-xl md:text-3xl lg:text-3xl items-center justify-center pb-16 sm:pb-20 md:pb-20 lg:pb-20 bg-linear-to-b from-[rgb(1,28,30)] via-[rgb(4,54,56)] to-[rgb(2,34,36)] transition-opacity duration-500 ${FadeOut ? "opacity-0" : "opacity-100"} tracking-widests`}>
            <div><img src="/LumoraRealmLogo-nobg.png" className={`rounded-full w-60 h-60 sm:w-90 sm:h-90 md:w-100 md:h-100 lg:w-100 lg:h-100 drop-shadow-[0_0_35px_rgba(170,170,170,0.7)] transition-opacity duration-1000 ${ShowLogo ? 'opacity-100' : 'opacity-0'}`}/></div>

            <div className="w-full sm:w-full md:w-full lg:w-full flex flex-wrap justify-center gap-1">

                <div
                    className={`bg-linear-to-b from-[rgb(255,245,220)] via-[rgb(224,190,120)] to-[rgb(176,140,84)] bg-clip-text text-transparent ${
                        ShowTitle ? "animate-slide-left" : "opacity-0"
                    }`}
                >
                    Lumora
                </div>

                <div
                    className={`bg-linear-to-b from-[rgb(255,245,220)] via-[rgb(224,190,120)] to-[rgb(176,140,84)] bg-clip-text text-transparent ${
                        ShowTitle ? "animate-slide-right" : "opacity-0"
                    }`}
                >
                    Realm
                </div>

            </div>
            <br />
            <div className={`text-center bg-linear-to-b from-[rgb(255,245,220)] via-[rgb(224,190,120)] to-[rgb(176,140,84)] transition-opacity duration-1000 ${ShowTagline ? 'opacity-100' : 'opacity-0'} bg-clip-text text-transparent`}>A world where illuminated stories come to life</div>
            
        </div>
    )
}
export default SplashScreen

