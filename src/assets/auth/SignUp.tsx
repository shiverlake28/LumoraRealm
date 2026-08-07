import { useEffect, useState } from "react";
import {FaGoogle , FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function SignUp(){
    function HandleSubmit(e: React.FormEvent<HTMLFormElement>){
        console.log('Email:',Email)
        console.log('Password:',Pword)
        e.preventDefault()
        if (!Email) {
            SetEmailError("Email is required");

            return;
            }
        
        SetEmailError("")
        

        if (!Pword) {
            SetPassError("Password is required");
            return;
            }
        else if(Pword.length <8){
            SetPassError("Password must be at least 8 character")    
            return
        }
        
        SetPassError("")
        SetLoading(true)

    }
    const [EmailError,SetEmailError] = useState("");
    const [PassError, SetPassError] = useState("");
    
    const [ShowPassword,SetShowPassword] = useState(false)
    const [Email,SetEmail] = useState("")
    const [Pword,SetPword] = useState("")
    const [Loading,SetLoading] = useState(false)
    useEffect(()=>{
        if(!Loading) return;
        const Signing = setTimeout(()=> {SetLoading(false);console.log("Sucess")},2500)
        return ()=>{clearTimeout(Signing)}    
    }
,[Loading])
    return(
        <div className="w-full min-h-screen font-space flex flex-col  justify-start items-center  pt-8 bg-linear-to-b from-[rgb(1,28,30)] via-[rgb(4,54,56)] to-[rgb(2,34,36)]">{/*entire bg*/}
            <div className="w-100 h-auto  space-y-5 pb-5 text-center ">
                {/*lumoraRealm and the tagline */}
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-3xl sm:text-2xl">✨LumoraRealm✨</p>
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-xl sm:text-lg capitalize">A world where illuminated stories  come to life.</p>
            </div>
            {/*SignUp card */}
            <div className="w-full h-full sm:w-100 sm:h-auto pt-1 flex flex-col items-center justify-start gap-3 bg-linear-to-b from-[rgb(8,70,72)] via-[rgb(11,82,84)] to-[rgb(14,96,98)] border-3 border-stone-400 hover:border-gray-400 shadow-xl shadow-gray-400/50 hover:shadow-gray-400 rounded-3xl">
                <p className="text-[rgb(214,168,150)]/90 text-xl">Step Inside</p>
                <p className="text-[rgb(214,168,150)]/90 text-lg">Experience the Extraordinary</p>

                <form id="SignUpform" onSubmit={HandleSubmit} className="w-full pl-5 pr-5 flex flex-col gap-3 h-auto   text-[rgb(248,242,236)]/90 ">
                    {/* Email */}
                    <label className="text-lg  text-[rgb(248,242,236)]">Email</label>
                    <input type="email" value={Email} onChange={(e) => SetEmail(e.target.value)}placeholder="e.g:you@gmail.com"  className="w-full h-10 pl-2 text-black border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-sm hover:shadow-black"/>
                    {EmailError && (<p className="text-red-400 text-[10px] h-2">{EmailError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Email?</a>
                    {/* Password */}
                    <label className="text-lg  text-[rgb(248,242,236)]">Password</label>
                    <div className="relative w-full">
                    <input type={ShowPassword?'text': "password"} value={Pword} onChange={(e) => SetPword(e.target.value)} placeholder="Password"  className="pl-2  text-black w-full h-10 border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-sm hover:shadow-black"/>
                    <p className="select-none absolute right-3 top-3 cursor-pointer text-black" onClick={()=>{SetShowPassword(!ShowPassword)}}>{ShowPassword? <FaEyeSlash/> : <FaEye/>}</p></div>
                    {PassError && (<p className="text-red-400 text-[10px] h-2">{PassError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Password?</a>
                    
                </form>
                {/* button */}
                <button type="submit" form="SignUpform" disabled={Loading} className={`w-50 h-12 border-2 rounded-3xl bg-[rgba(30,41,59,0.81)] text-[rgb(244,230,236)]/80 ${Loading? 'opacity-60 cursor-not-allowed': "opacity-100 cursor-pointer"}`}>{Loading? 'Signing In....': "SignUp"}</button>
                <p className="text-[rgb(170,170,170)]">-------------- Or --------------</p>
                {/* Other signUp options */}
                <div className="flex gap-10 ">
                    <a href=""> <FaGoogle className="w-8 h-8"/></a>
                    <a href=""><FaFacebook className="w-8 h-8" /></a>
                    <a href=""><FaGithub className="w-8 h-8"/></a>
                    <a href=""><FaLinkedin className="w-8 h-8"/></a>
                </div>  
                <p className="text-[12px] w-full pl-6 pb-6 text-[rgb(220,220,220)]">Already have an account? <a href="www.google.com" className="underline text-[rgb(248,246,236)]/90 ">Login</a></p>
            </div>
        </div>
    )
}
export default SignUp