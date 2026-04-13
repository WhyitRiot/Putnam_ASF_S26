import React from 'react';
import spaceStopImage from '../assets/space-stop-5.png'

const Hero = () => {
    return (
        <div className={"bg-[url(../assets/]"}>
            <div className="flex justify-center dark:bg-black">
                <div className={"flex flex-col items-center"}>
                    <h1 className={"font-audiowide text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
                    <div className={"flex flex-row"}>
                        <h2 className={"font-gugi flex flex-row justify-between items-center text-6xl gap-10"}>
                            <span className={"font-dafoe -rotate-8 text-7xl text-blue-300 text-shadow-space-eats"}>Space Eats</span>
                            <span className={"text-red-300 text-shadow-from"}>from</span>
                            <img className={"drop-shadow-[5px_5_px_10px_rgba(247, 245, 243)]"} src={spaceStopImage} alt="SPACE STOP 5"/>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;