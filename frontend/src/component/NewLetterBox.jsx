// import React from "react";
// function NewLetterBox() {
//     const handleSubmit=()=>{
//         e.preventDefault()
//     }
//     return (
//         <div className="w-[100%] h-[40vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start gap-[10px] flex-col">
//             <p className="md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]">Subscribe Now and Get 20% Instant Off</p>
//             <p className="md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]">Subscribe Now and  Enjoy Exclusive Savings ,Special Deals, and Early Access to New Collections</p>
//             <form action="" onSubmit={handleSubmit} className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px]">
//                 <input type="submit" placeholder="Enter Your Email" className="placeholder:text-[black] bg-slate-300 w-[600px] max-w-[60%] h-[40px] px-[20px] rounded-lg shadow-sm shadow-black"required/>
//                 <button className="text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer bg-[#2e3030c9] text-white flex items-center justify-center gap-[20px] border-[1px] border-[#80808049] rounded-lg shadow-sm shadow-black">Subscribe</button>
//             </form>
//         </div>

//     )
// }
// export default NewLetterBox

import React from "react";

function NewLetterBox({ mergeWithBg = false }) {
    return (
        <div
            className={`w-full flex items-center justify-center px-4 py-10 ${
                mergeWithBg ? "" : "bg-gradient-to-l from-[#141414] to-[#0c2025]"
            }`}
        >
            <div
                className={`w-full max-w-4xl ${
                    mergeWithBg
                        ? "bg-white/10 backdrop-blur-md"
                        : "bg-black bg-opacity-30"
                } rounded-xl p-6 flex flex-col items-center justify-center text-white gap-4 shadow-md`}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                    Subscribe Now & Get 20% Off
                </h2>
                <p className="text-sm md:text-base text-center">
                    Sign up for our newsletter and stay updated on new arrivals and special offers.
                </p>
                <form className="flex w-full max-w-md gap-2 mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 rounded-md text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition duration-200"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewLetterBox;


