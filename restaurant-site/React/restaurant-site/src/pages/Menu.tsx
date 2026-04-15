import React from 'react';
import spaceStopImage from "../assets/space-stop-5.png";
import logoGif from "../assets/Gus_Galaxy_Grill_Logo.gif";
import MenuTable from "../components/MenuTable.tsx";
import {menuitems} from "../utilities/menu_items.ts";
import MenuCard from "../components/MenuCard.tsx";

const Menu = () => {
    return (
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>
            <div className="flex flex-col justify-center gap-10 mb-10">
                <div className={"flex flex-col items-center mt-10 gap-5"}>
                    <h1 className={"font-audiowide text-8xl mb-7 text-red-600 text-shadow-galaxy"}>Gus's Galaxy Grill</h1>
                    <div className={"flex flex-row"}>
                        <h2 className={"font-dafoe -rotate-7 text-shadow-special text-yellow-300 drop-shadow-special flex flex-row justify-between items-center text-6xl gap-10"}>
                            Try the Special!
                        </h2>
                    </div>
                </div>
            </div>
            <div className={"grid grid-cols-4 items-center justify-items-center gap-20"}>
                {menuitems.map((item) =>{
                    return(
                        <MenuCard item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Menu;