import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../assets/logo.jpg';
import Google from '../assets/google.jpg'
import { FaEye } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { authDataContext } from "../context/AuthContext";
import { useContext } from "react";
import axios from 'axios'
import { signInWithPopup } from "firebase/auth";
import { provider,auth} from "../../utils/Firebase";
import { userDataContext} from "../context/UserContext";
import BgImg from '../assets/windows-login-bg.png'; 

function Registration(){
    let[show,setShow]=useState(false)
    let{serverUrl}=useContext(authDataContext)
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    const {userData,getCurrentUser}=useContext(userDataContext)

    let navigate=useNavigate()

    const handleSignup=async(e)=>{
        e.preventDefault()
        try{
            const result = await axios.post(serverUrl+'/api/auth/registration',{
                name,email,password
            },{withCredentials:true})
            getCurrentUser()
            navigate("/")
            console.log(result.data)
        }
        catch(error){
            console.log(error)
        }
    }

    const googleSignup=async()=>{
        console.log("google signup clicked!!");
        try{
            const response = await signInWithPopup(auth,provider)
            let user=response.user
            let name=user.displayName;
            let email=user.email;

            const result = await axios.post(serverUrl + "/api/auth/googlelogin",{name,email},{withCredentials:true})
            console.log(result.data)
            getCurrentUser(); 
            navigate("/");
        }
        catch(error){
            console.log("Google signup error",error)
        }
    }
    return(
        <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer" onClick={()=>navigate("/")}>
                <img className='w-[40px]' src={Logo} alt="" />
                <h1 className='text-[22px] font-sans'>OneCart</h1>
            </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
                <span className='text-[25px] font-semibold'>Registration Page</span>
                <span className='text-[16px]'>Welcome to OneCart , Place your order</span>
            </div>
            <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] background-blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
                <form action="" onSubmit={handleSignup}className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                    <button type="button"className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup}>
                        <img src={Google} alt="" className='w-[20px]' />Registration with  Google
                    </button>
                    <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                        <div className='w-[40%] h-[1px] bg-[#96969635]'></div >or <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                    </div>
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                        <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder:text-white/80 px-[20px] font-semibold'placeholder='username' required onChange={(e)=>setName(e.target.value)} value={name}/>
                        <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder=[#ffffffc7] px-[20px] font-semibold'placeholder='email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder=[#ffffffc7] px-[20px] font-semibold'placeholder='password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>

                        {!show && <FaEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]'onClick={()=>setShow(prev=>!prev)}/>}                        
                        {show && <BsEyeFill className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]'onClick={()=>setShow(prev=>!prev)}/>}

                        <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Create Account</button>
                        <p className='flex gap-[10px]'>you have any account?<span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer'onClick={()=>navigate("/login")}>Login</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration

//rzp_test_S38faaobXlP3Zf//keyid
//keysecret--onJqXdhUvTpSvM0XjzNJ6nJF//
