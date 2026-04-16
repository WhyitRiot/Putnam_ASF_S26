import type {CartData} from "../utilities/cart_data_type.ts";
import {moneyFormat} from "../utilities/format.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import cart from "../pages/Cart.tsx";

const CartItem = ({cartData, setCartData} :{cartData : CartData, setCartData : React.Dispatch<React.SetStateAction<CartData[]>>}) => {

    const onRemove = () =>{
        setCartData(prev => prev.filter(item =>{
            if (item != cartData){
                return item;
            }
        }))
    }
    const handleIncrement = () =>{
        setCartData(prev => prev.map(item =>
            item === cartData ? {...item, quantity: (item.quantity + 1 > 5 ? 5 : item.quantity + 1) } : item))
    }
    const handleDecrement = () =>{
        setCartData(prev => prev.map(item =>
            item === cartData ? {...item, quantity: (item.quantity -1 < 1 ? 1 : item.quantity -1)} : item
        ))
    }
    return (
        <div className="grid grid-cols-[60px_1fr_80px_1fr_1fr] gap-2 items-center">

            {/* icon */}
            <div className="w-[60px] h-[60px]">
                <img src={cartData.item.photo} alt={cartData.item.name} className={"rounded-2xl"}/>
            </div>

            {/* text */}
            <div>
              <span className="block text-[13px] font-semibold text-[#47484b] mb-2">
                {cartData.item.name}
              </span>
                <p className="text-[11px] font-semibold text-[#7a7c81]">
                    {moneyFormat.format(cartData.item.price)} x {cartData.quantity}
                </p>
            </div>

            {/* quantity */}
            <div className="grid grid-cols-3 items-center justify-center h-[30px] border border-gray-200 rounded-[7px] shadow-[0_1px_0_#efefef,0_1px_0.5px_rgba(239,239,239,0.5)]">

                <button onClick={handleDecrement} className="flex items-center justify-center text-black hover:cursor-pointer">
                    -
                </button>

                <span className="text-[15px] font-bold text-[#47484b] flex items-center justify-center">
                {cartData.quantity}
              </span>

                <button onClick={handleIncrement} className="flex items-center justify-center text-black hover:cursor-pointer">
                    +
                </button>
            </div>

            {/* price */}
            <div className="text-[15px] font-semibold text-[#47484b]">
                {moneyFormat.format(cartData.item.price * cartData.quantity)}
            </div>
            <button onClick={onRemove} className={"text-red-600 hover:bg-gray-100 hover:cursor-pointer border rounded-2xl"}>
                <FontAwesomeIcon icon={faX} />
            </button>
        </div>
    );
};

export default CartItem;