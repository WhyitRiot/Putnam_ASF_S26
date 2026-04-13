import React from 'react';
import spaceStopImage from "../assets/space-stop-5.png";
import logoGif from "../assets/Gus_Galaxy_Grill_Logo.gif";

const Menu = () => {
    return (
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>
            <div className="flex flex-col justify-center gap-10">
                <div className={"flex flex-col items-center mt-10 gap-5"}>
                    <h1 className={"font-audiowide text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
                    <div className={"flex flex-row"}>
                        <h2 className={"font-dafoe -rotate-7 text-shadow-special text-yellow-300 drop-shadow-special flex flex-row justify-between items-center text-6xl gap-10"}>
                            Try the Special!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;