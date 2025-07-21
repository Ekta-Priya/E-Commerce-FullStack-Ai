import React from "react";
import Title from "../component/Title";
import about from "../assets/about.jpg";
import NewLetterBox from "../component/NewLetterBox";

function About() {
    return (
        <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${about})` }}>

            <div className="bg-white/30 backdrop-brightness-50 w-full min-h-screen">

                <div className="pt-[80px] px-6 flex flex-col items-center">
                    <Title text1={"ABOUT"} text2={"US"} />


                    <div className="w-full max-w-7xl mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
                        {[{
                            heading: "Who We Are",
                            text: `OneCart was born for smart, seamless shopping — created to deliver quality products,
                            trending styles, and everyday essentials in one place. With reliable service,
                            fast delivery, and great value, OneCart makes your online shopping experience simple,
                            satisfying, and stress-free.

                            Modern shoppers — combining style, convenience, and affordability. Whether it's fashion,
                            essentials, or trends, we bring everything you need to one trusted platform with
                            fast delivery, easy returns, and a customer-first experience you'll love.`
                        }, {
                            heading: "Our Mission",
                            text: `Our mission is to redefine online shopping by delivering quality, affordability,
                            and convenience. OneCart connects customers with trusted products and brands,
                            offering a customer-focused experience that saves time, adds value, and fits
                            every lifestyle and need.`
                        }].map(({ heading, text }, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl text-base leading-relaxed"
                            >
                                <h3 className="text-[#bff1f9] text-xl font-semibold mb-4">{heading}</h3>
                                <p className="whitespace-pre-line">{text}</p>
                            </div>
                        ))}
                    </div>


                    <div className="w-full mt-20 max-w-7xl flex flex-col items-center text-white">
                        <Title text1={"WHY"} text2={"CHOOSE US"} />
                        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mt-12 px-4">
                            {[{
                                title: "Quality Assurance",
                                desc: "We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always."
                            }, {
                                title: "Convenience",
                                desc: "Enjoy seamless shopping with everything you need in one place and user-friendly navigation."
                            }, {
                                title: "Exceptional Customer Service",
                                desc: "Our support team is always ready to help, ensuring smooth returns, tracking, and resolution."
                            }].map(({ title, desc }, idx) => (
                                <div key={idx} className="flex-1 max-w-[300px] min-h-[200px] border border-gray-600 bg-white/10 backdrop-blur-md text-white rounded-xl p-6 flex flex-col justify-start items-center gap-4 shadow-md text-center hover:scale-105 transition duration-300">
                                    <b className="text-lg font-semibold text-[#bff1f9]">{title}</b>
                                    <p className="text-sm">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="w-full mt-20">
                    <NewLetterBox />
                </div>
            </div>
        </div>
    );
}

export default About;
