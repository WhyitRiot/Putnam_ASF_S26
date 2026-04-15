import {useContext, useEffect, useState} from 'react';
import {menuitems} from "../utilities/menu_items.ts";
import MenuCard from "../components/MenuCard.tsx";
import { Menu as TailMenu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import DropdownItem from "../components/DropdownItem.tsx";
import {SiteContext} from "../context/SiteContext.tsx";
const uniqueCategories = [...new Map(menuitems.map(item =>
    [item["category"], item])).values()];
const Menu = () => {
    const context = useContext(SiteContext);
    if (!context){
        throw Error("outside of provider!");
    }
    const [filter, setFilter] = useState("All Categories");
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
            <div className={"flex flex-row justify-center"}>
                    <TailMenu as="div" className="relative inline-block mt-10">
                        <MenuButton className="inline-flex h-20 w-50 justify-between items-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-lg font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                            <div className={"font-audiowide text-yellow-300 drop-shadow-special"}>{filter}</div>
                            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                        </MenuButton>

                        <MenuItems
                            transition
                            className="font-gugi absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                        >
                            <MenuItem>
                                <a onClick={() => setFilter("All Categories")}
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    All Categories
                                </a>
                            </MenuItem>
                            <div className="py-1">
                                {uniqueCategories.map((item) =>{
                                    return(
                                        <DropdownItem item={item.category} setFilter={setFilter} />
                                    )
                                })}
                            </div>
                        </MenuItems>
                    </TailMenu>
            </div>
            <div className={"mt-10 grid grid-cols-4 items-center justify-items-center gap-20"}>
                {menuitems.filter((item) => {
                    if (filter === "All Categories"){
                        return item;
                    } else{
                        return item.category === filter;
                    }
                }).map((item) => {
                    return (
                        <MenuCard item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Menu;