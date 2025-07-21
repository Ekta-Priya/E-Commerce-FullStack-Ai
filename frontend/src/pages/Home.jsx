import React, { useEffect, useState } from "react";
import Background from "../component/Background";
import Hero from "../component/Hero.jsx";
import Nav from "../component/Nav.jsx";
import Product from "./Product.jsx";
import OurPolicy from "../component/OurPolicy.jsx";
import NewLetterBox from "../component/NewLetterBox.jsx";
import Footer from "../component/Footer.jsx";

function Home() {
    let heroData = [
        { text1: "30% off limited offer", text2: "Style that" },
        { text1: "Discover the best of bold fashion", text2: "Limited Time Only" },
        { text1: "Explore Our Best Collections", text2: "Shop Now!" },
        { text1: "Choose your Perfect Fashion Fit", text2: "Now On Sale" }
    ];

    let [heroCount, setHeroCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-x-hidden relative top-[70px]">
            <Nav />
            <div className="w-full h-auto lg:h-[100vh] flex flex-col lg:flex-row bg-gradient-to-l from-[#141414] to-[#0c2025]">
                <Hero
                    heroCount={heroCount}
                    setHeroCount={setHeroCount}
                    heroData={heroData[heroCount]}
                />
                <Background heroCount={heroCount} />
            </div>
            <Product/>
            <OurPolicy/>
            <NewLetterBox/>
            <Footer/>
        </div>
    );
}

export default Home;
