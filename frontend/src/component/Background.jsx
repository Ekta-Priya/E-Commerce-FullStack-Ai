import React from "react";
import women from '../assets/women.jpg';
import men from '../assets/men.jpg';
import cosmetics from '../assets/cosmetics.jpg';
import img1 from '../assets/img1.jpg';

function Background({ heroCount }) {
    const images = [women, men, cosmetics, img1];

    return (
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
            <img
                src={images[heroCount]}
                alt="Fashion"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default Background;

