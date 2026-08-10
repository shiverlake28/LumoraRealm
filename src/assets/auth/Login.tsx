import { useEffect, useState } from "react";
import {FaGoogle , FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(){
    function HandleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (!Email){
            SetEmailError("Email is required")
            return
        }
        if (!Pword){
            SetPwordError("Password is required")
            return
        }
        if (Pword.length < 8){
            SetPwordError("Password must be at least 8 character")
            return
        }
        console.log(" Email value:", Email);
        console.log(" Password value:", Pword);
        SetLoading(true)
    }
    const navigate = useNavigate()
    const [ShowPassword,SetShowPassword] = useState(false)
    const [Email,SetEmail] = useState("")
    const [Pword,SetPword] =useState("")
    const [EmailError,SetEmailError] = useState("")
    const [PwordError,SetPwordError] =useState("")
    const [Loading,SetLoading] = useState(false)
    useEffect(()=>{
        const Signing = setTimeout(()=>{SetLoading(false);if (Email.length > Pword.length) return navigate('/Home')},5000)
        return ()=>
            clearTimeout(Signing)
    },[Loading])
    return(
        <div className="w-full min-h-screen font-space flex flex-col  justify-start items-center  pt-6 px-2 md:pt-10 bg-linear-to-b from-[rgb(1,28,30)] via-[rgb(4,54,56)] to-[rgb(2,34,36)]">{/*entire bg*/}
            <div className="w-[90%] max-w-100 mx-auto h-auto  space-y-5 pb-5 text-center ">
                {/*lumoraRealm and the tagline */}
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-2xl md:text-3xl">✨LumoraRealm✨</p>
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-lg md:text-xl capitalize">A world where illuminate stories  come to life.</p>
            </div>
            {/*Login */}
            <div className="w-[90%] max-w-100 mx-auto h-auto   pt-1 flex flex-col items-center justify-start gap-2 md:gap-3 bg-linear-to-b from-[rgb(8,70,72)] via-[rgb(11,82,84)] to-[rgb(14,96,98)] border-3 border-stone-400 hover:border-gray-400 shadow-xl shadow-gray-400/50 hover:shadow-gray-400 rounded-3xl">
                <p className="text-[rgb(214,168,150)] text-2xl">Welcome Back</p>
                <p className="text-[rgb(214,168,150)] text-xl text-center ">The Adventure Continues</p>
                {/* email */}
                <form action=" " id="LoginForm"  onSubmit={HandleSubmit} className="w-full px-4 md:px-5 flex flex-col gap-3 h-auto   text-[rgb(248,242,236)]/90 ">
                    <label className="text-lg  text-[rgb(248,242,236)]">Email</label>
                    <input type="email" value={Email} placeholder="e.g:you@gmail.com" onChange={(e)=>{SetEmail(e.target.value); SetEmailError("");}} className=" pl-2 text-black  w-full h-10 border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-md hover:shadow-black"/>
                    {EmailError && (<p className="text-red-400 text-[10px] h-2">{EmailError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Email?</a>
                    {/* password */}
                    <label className="text-lg  text-[rgb(248,242,236)]">Password</label>
                    <div className="relative w-full">
                    
                    <input type={ShowPassword?"text":"password"} onChange={(e)=>{SetPword(e.target.value);SetPwordError("");}} placeholder="Password"  className="w-full pl-2 text-black h-10 border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-md hover:shadow-black"/>
                    <p className="select-none absolute right-3 top-3 cursor-pointer text-black" onClick={()=>{SetShowPassword(!ShowPassword)}}>{ShowPassword? <FaEyeSlash/> : <FaEye/>}</p></div>    
                    {PwordError && (<p className="text-red-400 text-[10px] h-2">{PwordError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Password?</a>
                </form>
                {/* Buttons */}
                <button form="LoginForm" disabled={Loading} className={`w-40 sm:w-50 max-w-full h-12  border-2 rounded-3xl bg-[rgba(30,41,59,0.81)] text-[rgb(244,230,236)]/80 ${Loading? 'opacity-60 cursor-not-allowed': "opacity-100 cursor-pointer"}`} >{Loading? "Loading..." :"Login"}</button>
                
                <p className="text-[rgb(170,170,170)]">-------------- Or --------------</p>
                <div className="flex gap-8 md:gap-10 ">
                    <a href=""> <FaGoogle className="w-8 h-8"/></a>
                    <a href=""><FaFacebook className="w-8 h-8" /></a>
                    <a href=""><FaGithub className="w-8 h-8"/></a>
                    <a href=""><FaLinkedin className="w-8 h-8"/></a>
                </div>
                <p className="text-[12px] w-full px-4 md:pl-6 pb-5 text-[rgb(220,220,220)]">Don't have an account? <Link to="/SignUps"  className="underline text-[rgb(248,246,236)]/90 ">SignUp</Link></p>
            </div>
        </div>
    )
}

//signup will be here linked and then routed to the Signup.tsx
export default Login