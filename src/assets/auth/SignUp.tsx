import { useEffect, useState } from "react";
import {FaGoogle , FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";
function SignUp(){
    function HandleSubmit(e: React.FormEvent<HTMLFormElement>){
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
        console.log('Email:',Email)
        console.log('Password:',Pword)
    
        SetLoading(true)

    }
    const navigate = useNavigate()
    const [EmailError,SetEmailError] = useState("");
    const [PassError, SetPassError] = useState("");
    
    const [ShowPassword,SetShowPassword] = useState(false)
    const [Email,SetEmail] = useState("")
    const [Pword,SetPword] = useState("")
    const [Loading,SetLoading] = useState(false)
    useEffect(()=>{
        if(!Loading) return;
        const Signing = setTimeout(()=> {SetLoading(false); if (Email.length > Pword.length) return navigate('/Login')},2500)
        return ()=>{clearTimeout(Signing)}    
    }
,[Loading])
    return(
        <div className="w-full min-h-screen font-space flex flex-col  justify-start items-center  pt-6 px-2 md:pt-10 bg-linear-to-b from-[rgb(8,27,34)] via-[rgb(17,32,43)] to-[rgb(39,24,39)]">{/*entire bg*/}
            <div className="w-[90%] max-w-100 mx-auto h-auto  space-y-5 pb-5 text-center ">
                {/*lumoraRealm and the tagline */}
                <div className="flex justify-center gap-2">
                <BsStars className="w-8 h-8 text-amber-100" />
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-2xl md:text-3xl"> LumoraRealm </p>
                <BsStars className="w-8 h-8 text-amber-100 -scale-x-100 " />
                </div>
                <p className="bg-linear-to-br from-[rgb(255,247,242)] to-[rgb(214,168,150)] bg-clip-text text-transparent text-lg md:text-xl capitalize">A world where illuminated stories  come to life.</p>
            </div>
            {/*SignUp card */}
            <div className="w-auto md:w-100 h-auto md:h-auto pt-1 flex flex-col items-center justify-start gap-2 md:gap-3 bg-linear-to-b from-[rgb(105,108,111)] via-[rgb(125,123,120)] to-[rgb(145,137,126)] border-3 border-[rgb(202,190,165)]  shadow-lg shadow-gray-400/50 hover:shadow-gray-400 rounded-3xl">
                <p className="text-[rgb(25,25,28)]/90 text-xl">Step Inside</p>
                <p className="text-[rgb(25,25,28)]/90 text-lg">Experience the Extraordinary</p>

                <form id="SignUpform" onSubmit={HandleSubmit} className="w-full px-4 md:px-5 flex flex-col gap-3 h-auto   text-[rgb(25,25,28)]/90 ">
            {/* Email */}
                    <label className="text-lg  text-[rgb(25,25,28)]">Email</label>
                    <input type="email" value={Email} onChange={(e) => {SetEmail(e.target.value); SetEmailError("")}} placeholder="e.g:you@gmail.com"  className="w-full h-10 pl-2 text-black border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-sm hover:shadow-black"/>
                    {EmailError && (<p className="text-red-400 text-[10px] h-2">{EmailError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Email?</a>
                    {/* Password */}
                    <label className="text-lg  text-[rgb(25,25,28)]">Password</label>
                    <div className="relative w-full">
                    <input type={ShowPassword?'text': "password"} value={Pword} onChange={(e) => {SetPword(e.target.value); SetPassError("")}} placeholder="Password"  className="pl-2  text-black w-full h-10 border border-black/90 rounded-md bg-[rgb(177,178,181)] placeholder:text-black/40 hover:shadow-sm hover:shadow-black"/>
                    <p className="select-none absolute right-3 top-3 cursor-pointer text-black" onClick={()=>{SetShowPassword(!ShowPassword)}}>{ShowPassword? <FaEyeSlash/> : <FaEye/>}</p></div>
                    {PassError && (<p className="text-red-400 text-[10px] h-2">{PassError}</p>)}
                    <a href="https://www.google.com" className="text-[12px] pl-1">Forget Password?</a>

                </form>
                {/* button */}
                <button type="submit" form="SignUpform" disabled={Loading} className={`w-40 sm:w-50 max-w-full h-12  border-2 rounded-3xl bg-[rgba(30,41,59,0.81)] text-[rgb(244,230,236)]/80 ${Loading? 'opacity-60 cursor-not-allowed': "opacity-100 cursor-pointer"}`}>{Loading? 'Signing In....': "SignUp"}</button>
                <p className="text-gray-700">-------------- Or --------------</p>
                {/* Other signUp options */}
                <div className="flex gap-8 md:gap-10 ">
                    <a href=""> <FaGoogle className="w-8 h-8"/></a>
                    <a href=""><FaFacebook className="w-8 h-8" /></a>
                    <a href=""><FaGithub className="w-8 h-8"/></a>
                    <a href=""><FaLinkedin className="w-8 h-8"/></a>
                </div>  
                <p className="text-[12px] w-full px-4 md:pl-6 pb-5 text-[rgb(45,45,48)] font-bold">Already have an account? <Link to="/Login" className="underline text-[rgb(248,246,236)]/90 ">Login</Link></p>
            </div>
        </div>
    )
}
export default SignUp