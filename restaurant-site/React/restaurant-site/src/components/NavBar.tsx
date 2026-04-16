import {useContext} from 'react';
import {Link} from "react-router";
import logo from "../assets/Gus_Galaxy_Grill_logo2.png"
import {SiteContext} from "../context/SiteContext.tsx";

const NavBar = () => {
    const context = useContext(SiteContext);
    if (!context){
        throw Error("outside of provider!");
    }
    const {cartData} = context;
    return (
        <>
            <nav data-theme={"dark"}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-18" alt="Gus's Galaxy Grill Logo"/>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                  d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li className={"p-1 border rounded-sm"}>
                                <Link className={"block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"} aria-current={"page"} to="/">Home</Link>
                            </li>
                            <li className={"p-1 border rounded-sm"}>
                                <Link className={"block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"} to="/menu">Menu</Link>
                            </li>
                            <li className={"p-1 border rounded-sm"}>
                                <Link className={"block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"} to="/reservations">Reservations</Link>
                            </li>
                            <li className={"p-1 border rounded-sm"}>
                                <Link className={"inline-flex flex-row gap-2 py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"} to="/cart">
                                    <div>Cart</div>
                                    <div>{cartData.length}</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;