import React from 'react';
import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import gusLogo from "../assets/Gus_Galaxy_Grill_logo2.png";

const GusModal = ({title, description, openBool, setOpenBool, Content} : {title: string, description: string, openBool: boolean, setOpenBool: React.Dispatch<React.SetStateAction<boolean>>, Content: React.ReactNode,}) => {
    return (
        <Dialog open={openBool} onClose={() => setOpenBool(false)} className="relative z-50">
            <div className="fixed inset-0 flex bg-black/50 w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border-white drop-shadow-special bg-gray-300 p-12 text-black rounded-2xl">
                    <DialogTitle className="flex flex-col items-center font-bold text-red-500 text-shadow-from font-atomic text-4xl lg:text-5xl">{title} <img src={gusLogo} alt="Gus's Grill!"/></DialogTitle>
                    <Description className={"flex font-dafoe text-3xl justify-center text-center"}>{description}</Description>
                    {Content}
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default GusModal;