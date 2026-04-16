import {useContext, useState} from 'react';
import {Dialog, DialogPanel, DialogTitle, Description} from "@headlessui/react";
import {SiteContext} from "../context/SiteContext.tsx";
import CartItem from "../components/CartItem.tsx";
import {moneyFormat} from "../utilities/format.ts";
import emptyCart from "../assets/empty-cart.gif"
import gusLogo from "../assets/Gus_Galaxy_Grill_logo2.png"
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [cancelConfirm, setCancelConfirm] = useState(false);
    const context = useContext(SiteContext);
    if (!context){
        throw Error("outside of provider!");
    }
    const {cartData, setCartData} = context;
    const openCheckout = () =>{
        setIsCheckoutOpen(true);
    }
    const openCancel = () =>{
        setIsCancelOpen(true);
    }

    const openCancelConfirm = () =>{
        setIsCancelOpen(false);
        setCancelConfirm(true);
    }

    const handleCheckout = () => {
        console.log(cartData);
        setCartData([]);
        setIsCheckoutOpen(false);
        navigate("/menu")
    }

    const handleCancel = () =>{
        setCartData([]);
        setIsCancelOpen(false);
        navigate("/menu");
    }
    let subtotal = 0;
    cartData.forEach(cartItem =>{
        subtotal += cartItem.item.price * cartItem.quantity;
    })
    const tax = 0.08;
    const total = subtotal * (1 + tax);
    return (
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>

            <Dialog open={cancelConfirm} onClose={() => setCancelConfirm(false)} className="relative z-50">
                <div className="fixed inset-0 flex bg-black/50 w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border-white drop-shadow-special bg-gray-300 p-12 text-black rounded-2xl">
                        <DialogTitle className="flex flex-col items-center font-bold text-red-500 text-shadow-from font-atomic text-4xl lg:text-5xl">Canceled Order <img src={gusLogo} alt="Gus's Grill!"/></DialogTitle>
                        <Description className={"flex font-dafoe text-3xl justify-center text-center"}>Your order is canceled!</Description>
                        <div className="flex gap-4">
                            <button className={"flex-1 font-audiowide bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 hover:to-blue-600 hover:cursor-pointer text-white font-semibold rounded-md"} onClick={handleCancel}>Ok!</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <Dialog open={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex bg-black/50 w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border-white drop-shadow-special bg-gray-300 p-12 text-black rounded-2xl">
                        <DialogTitle className="flex flex-col items-center font-bold text-red-500 text-shadow-from font-atomic text-4xl lg:text-5xl">Checkout <img src={gusLogo} alt="Gus's Grill!"/></DialogTitle>
                        <Description className={"flex font-dafoe text-3xl justify-center text-center"}>Ready to checkout?</Description>
                        <p className={"font-audiowide text-center"}>Checkout with {cartData.length} items totalling {moneyFormat.format(total)}</p>
                        <div className="flex gap-4">
                            <button className={"flex-1 font-audiowide bg-gradient-to-b from-red-400 via-red-600 to-red-700 hover:to-red-600 hover:cursor-pointer text-white font-semibold rounded-md"} onClick={() => setIsCheckoutOpen(false)}>Cancel</button>
                            <button className={"flex-1 font-audiowide bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 hover:to-blue-600 hover:cursor-pointer text-white font-semibold rounded-md"} onClick={handleCheckout}>Checkout</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <Dialog open={isCancelOpen} onClose={() => setIsCancelOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex bg-black/50 w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border-white drop-shadow-special bg-gray-300 p-12 text-black rounded-2xl">
                        <DialogTitle className="flex flex-col items-center font-bold text-red-500 text-shadow-from font-atomic text-4xl lg:text-5xl">Cancel Order <img src={gusLogo} alt="Gus's Grill!"/></DialogTitle>
                        <Description className={"flex font-dafoe text-3xl justify-center text-center"}>Cancel your Order?</Description>
                        <p className={"font-audiowide text-center"}>Cancel order with {cartData.length} items totalling {moneyFormat.format(total)}</p>
                        <div className="flex gap-4">
                            <button className={"flex-1 font-audiowide bg-gradient-to-b from-red-400 via-red-600 to-red-700 hover:to-red-600 hover:cursor-pointer text-white font-semibold rounded-md"} onClick={openCancelConfirm}>Yes, Cancel</button>
                            <button className={"flex-1 font-audiowide bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 hover:to-blue-600 hover:cursor-pointer text-white font-semibold rounded-md"} onClick={() => setIsCancelOpen(false)}>Go Back!</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        <>
            {cartData.length > 0 ?

            <div className={"flex flex-col items-center justify-center"}>
                <div className="flex flex-col justify-center gap-10 mt-20 mb-20">
                    <div className={"flex flex-row"}>
                        <h2 className={"font-dafoe -rotate-7 text-shadow-special text-yellow-300 drop-shadow-special flex flex-row justify-between items-center text-4xl lg:text-6xl gap-10"}>
                            Thanks for dining with us!
                        </h2>
                    </div>
                </div>
                <div className="grid gap-1">

                    {/* CART */}
                    <div className="w-sm lg:w-lg bg-gray-300/50 shadow-[0_187px_75px_rgba(0,0,0,0.01),0_105px_63px_rgba(0,0,0,0.05),0_47px_47px_rgba(0,0,0,0.09),0_12px_26px_rgba(0,0,0,0.1)] rounded-[19px_19px_7px_7px]">

                        <div className="h-10 flex items-center px-5 border-b border-gray-200 text-[11px] font-bold text-white">
                            Your cart
                        </div>

                        <div className="p-2 flex flex-col gap-3">

                            {/* PRODUCT */}
                            {cartData.map((cartItem, index)=>{
                                return(
                                    <CartItem cartData={cartItem} setCartData={setCartData} key={index}/>
                                )
                            })}
                        </div>
                    </div>

                    {/* CHECKOUT */}
                    <div className="w-sm lg:w-lg bg-gray-300/50 shadow-[0_187px_75px_rgba(0,0,0,0.01),0_105px_63px_rgba(0,0,0,0.05)] rounded-[9px_9px_19px_19px]">

                        <div className="h-10 flex items-center px-5 border-b text-[11px] font-bold text-white">
                            Checkout
                        </div>

                        <div className="grid grid-cols-[3fr_1fr] gap-2 p-2 text-[13px]">
                            <span className="text-[11px] font-bold text-gray-200">Subtotal</span>
                            <span className={"text-white"}>{moneyFormat.format(subtotal)}</span>

                            <span className="text-[11px] font-bold text-gray-200">Tax</span>
                            <span className={"text-white"}>{moneyFormat.format(subtotal * tax)}</span>
                        </div>

                        <div className="flex flex-1 items-center justify-between p-3 gap-4 bg-gray-300/50 rounded-b-[19px]">
                            <div className="text-[22px] font-black text-black drop-shadow-special">
                                {moneyFormat.format(total)}
                            </div>
                            <div className={"flex flex-3 gap-2 h-9"}>
                                <button onClick={openCancel} className={"flex-1 bg-gradient-to-b from-red-400 via-red-600 to-red-700 hover:to-red-600 hover:cursor-pointer text-white font-semibold rounded-md"}>
                                    Cancel
                                </button>
                                <button onClick={openCheckout} className="flex-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700 hover:to-blue-600 hover:cursor-pointer text-white font-semibold rounded-md">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

                :
                <div className={"flex flex-row justify-center items-center"}>
                    <div className={"flex flex-col mt-10 items-center gap-10 font-audiowide text-7xl text-shadow-space-eats text-yellow-300 drop-shadow-special"}>
                        <p>Your cart is empty!</p>
                        <img src={emptyCart} alt=""/>
                    </div>
                </div>
            }
            </>
        </div>
    );
};

export default Cart;