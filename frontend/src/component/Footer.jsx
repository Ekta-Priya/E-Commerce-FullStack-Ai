import React from "react";
import logo from '../assets/logo.jpg'
function Footer() {
    return (
        <div className="w-[100%] md:h-[36vh] h-[auto] mb-[77px] md:mb-[0px]">
            <div className="w-[100%] md:h-[30vh] h-[auto] md:mb-[0px] bg-[#dbfcfcec] flex flex-col md:flex-row items-start md:items-center justify-between md:px-[50px] px-[10px] py-[20px] gap-y-6">

                <div className="md:w-[30%] w-[35%] h-[100%] flex justify-center flex-col gap-[5px]">
                    <div className="flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]">
                        <img src={logo} className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]" alt="" />
                        <p className="text-[19px] md:text-[20px] text-[black]">OneCart</p>

                    </div>
                    <p className="text-[15px] text-[#1e2223] hidden md:block">
                        OneCart is your all-in-one online shopping destination,offering top quality products ,unbeatable deals and fast delivery all backed by trusted service ,designed to make your life easier everyday</p>
                    <p className="tect-[15px] text-[#1e2223] flex  md:hidden ">Fast. Easy. Reliable. OneCart Shopping </p>

                </div>
                <div className="md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center">
                    <div className="flex items-center gap-[5px] mt-[10px] md:mt-[40px]">
                        <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">COMPANY</p>
                    </div>
                    <ul>
                        <li className="text-[15px] text-[#1e2223] hidden md:block">HOME</li>
                        <li className="text-[15px] text-[#1e2223] cursor-pointer">ABOUT US</li>
                        <li className="text-[15px] text-[#1e2223] cursor-pointer  hidden md:block">DELIVERY</li>
                        <li className="text-[15px] text-[#1e2223] cursor-pointer">PRIVACY POLICY</li>
                    </ul>
                </div>
                <div className="md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center">
                    <div className="flex items-center gap-[5px] mt-[10px] md:mt-[40px]">
                        <p className="text-[19px] md:text-[20px] text-[#1e2223] font-sans">Get in Touch</p>
                    </div>
                    <ul>
                        <li className="text-[15px] text-[#1e2223] ">+91-8721345610</li>
                        <li className="text-[15px] text-[#1e2223] ">contact@OneCart.com</li>
                        <li className="text-[15px] text-[#1e2223]hidden md:block">_1-321-123-4321</li>
                        <li className="text-[15px] text-[#1e2223] hidden md:block">admin@OneCart.com</li>
                    </ul>
                </div>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-400"></div>
            <div className="w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center">Copyright 2025@oneCart.com-All Rights Reserved</div>
        </div>
    )
}
export default Footer