import React from "react";
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
    return (
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full flex flex-col justify-center items-start px-6 sm:px-10 relative text-white">
            <div>
                <p className="text-[20px] sm:text-[32px] lg:text-[48px] text-[#88d9ee] font-bold mb-2">
                    {heroData.text1}
                </p>
                <p className="text-[18px] sm:text-[28px] lg:text-[40px] text-[#88d9ee] font-semibold">
                    {heroData.text2}
                </p>
            </div>

            <div className="flex gap-3 mt-6">
                {[0, 1, 2, 3].map((i) => (
                    <FaCircle
                        key={i}
                        className={`w-[14px] h-[14px] cursor-pointer ${
                            heroCount === i ? "fill-orange-400" : "fill-white"
                        }`}
                        onClick={() => setHeroCount(i)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Hero;
