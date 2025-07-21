// import React from "react";
// import Title from "./Title";
// import { TbExchange } from "react-icons/tb";
// import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
// import { BiSupport } from "react-icons/bi";


// function OurPolicy() {
//     return (
//         <div className="w-[100vw] h-[100vh] md:h-[70vh] flex item-center justify-start flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px]">
//             <div className="h-[8%] w-[100%] text-center mt-[70px]">
//                 <Title text1={"OUR"} text2={"POLICY"} />
//                 <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">Customer-Friendly Policies-Committed to your Satisfaction and Safety</p>
//             </div>
//             <div className="w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50%] gap-[80px]">
//                 <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
//                     <TbExchange className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
//                     <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">Easy Exchange Policy</p>
//                     <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">Exchange Made Easy-Quick,Simple and customer-friendly Process</p>
//                 </div>
//                 <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
//                     <TbRosetteDiscountCheckFilled className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
//                     <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">7 Days Replacement Policies</p>
//                     <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">Shop With Confidence-7 Days Easy Return Gurantee</p>

//                 </div>
//                 <div className="w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px]">
//                     <BiSupport className="md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]" />
//                     <p className="font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]">Cutomer Support</p>
//                     <p className="font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center">Trusted Customer Support-Your Satisfaction is Our Priority</p>

//                 </div>
//             </div>
//         </div>
//     )

// }
// export default OurPolicy

import React from "react";
import Title from "./Title";
import { TbExchange, TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
    return (
        <div className="w-full min-h-screen md:min-h-[70vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] px-4 py-16 gap-10">
            {/* Title Section */}
            <div className="text-center">
                <Title text1={"OUR"} text2={"POLICY"} />
                <p className="text-sm md:text-lg text-blue-100 mt-2">
                    Customer-Friendly Policies – Committed to Your Satisfaction and Safety
                </p>
            </div>

            {/* Policy Cards */}
            <div className="w-full flex flex-wrap justify-center gap-8 lg:gap-16">
                {/* Card 1 */}
                <div className="w-[300px] md:w-[350px] bg-[#1b2b30] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-md hover:scale-105 transition">
                    <TbExchange className="w-12 h-12 md:w-16 md:h-16 text-[#90b9ff]" />
                    <p className="font-semibold text-xl md:text-2xl text-[#a5e8f7]">Easy Exchange Policy</p>
                    <p className="text-sm md:text-base text-[aliceblue]">
                        Exchange made easy – Quick, simple, and customer-friendly process.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-[300px] md:w-[350px] bg-[#1b2b30] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-md hover:scale-105 transition">
                    <TbRosetteDiscountCheckFilled className="w-12 h-12 md:w-16 md:h-16 text-[#90b9ff]" />
                    <p className="font-semibold text-xl md:text-2xl text-[#a5e8f7]">7-Day Replacement</p>
                    <p className="text-sm md:text-base text-[aliceblue]">
                        Shop with confidence – 7-day easy return guarantee.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-[300px] md:w-[350px] bg-[#1b2b30] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-md hover:scale-105 transition">
                    <BiSupport className="w-12 h-12 md:w-16 md:h-16 text-[#90b9ff]" />
                    <p className="font-semibold text-xl md:text-2xl text-[#a5e8f7]">Customer Support</p>
                    <p className="text-sm md:text-base text-[aliceblue]">
                        Trusted customer support – Your satisfaction is our priority.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurPolicy;
