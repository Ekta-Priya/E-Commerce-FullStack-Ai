import React from "react";
import Title from "../component/Title";
import contact from "../assets/contact.jpg";
import NewLetterBox from "../component/NewLetterBox";

function Contact() {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${contact})` }}
        >

            <div className="bg-black/60 w-full min-h-screen pt-[80px] px-6 flex flex-col items-center justify-start">
                <Title text1={"CONTACT"} text2={"US"} />


                <div className="w-full max-w-6xl mt-10 flex flex-col lg:flex-row gap-12 items-center justify-between text-white">
                    <div className="flex-1 flex flex-col gap-4 text-sm md:text-base">
                        <h3 className="text-lg md:text-xl font-bold">Our Store</h3>
                        <p>
                            12345 Random Station <br />
                            Random City, State, India
                        </p>

                        <div className="mt-4">
                            <p>Tel: +91-9873214531</p>
                            <p>Email: admin@onecart.com</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg md:text-xl font-bold">Careers at OneCart</h3>
                            <p className="mt-1">Learn more about our team and job openings.</p>
                            <button className="mt-4 px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition duration-200">
                                Explore Jobs
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 hidden lg:block">

                    </div>
                </div>
                <div className="w-full mt-20">
                    <NewLetterBox mergeWithBg={true} />

                </div>
            </div>
        </div>
    );
}

export default Contact;
