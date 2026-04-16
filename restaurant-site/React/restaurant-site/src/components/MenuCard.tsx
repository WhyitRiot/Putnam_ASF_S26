import {type ChangeEvent, useContext} from 'react';
import * as yup from 'yup';
import {type InferType} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {type MenuItem} from "../utilities/menu_type.ts"
import {type FieldValues, useForm} from "react-hook-form";
import {SiteContext} from "../context/SiteContext.tsx";
import {moneyFormat} from "../utilities/format.ts";

const MenuCard = ({item} : {item: MenuItem}) => {
    const context = useContext(SiteContext);
    if (!context){
        throw Error("outside of provider!")
    }
    const {setCartData} = context;
    const quantityInput = "quantity";
    const schema = yup.object().shape({
        quantity: yup.number().min(1).max(5).positive().required()
    })

    type formData = InferType<typeof schema>;

    const {register, handleSubmit, getValues, watch, setValue, reset} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            quantity: 1
        }
    });

    const watchQuantity = watch("quantity");

    const onSubmit = async (data : FieldValues) =>{
        const parsedData : formData = await schema.validate(data);
        const {quantity} = parsedData;
        setCartData(prev=>[...prev, {item, quantity}])
        reset();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>)=>{
        const {name, value} = e.target;
        console.log("change")
        const numVal = parseInt(value);
        if (!isNaN(numVal)){
            setValue(name as keyof formData, value as never, {
                shouldValidate: true,
                shouldDirty: true
            })
        }
    }
    const handleDecrement = () =>{
        const currentValue = getValues("quantity");
        if (currentValue > 1){
            setValue("quantity", currentValue - 1, {
                shouldValidate: true,
                shouldDirty: true
            })
        }
    }
    const handleIncrement = () =>{
        const currentValue = getValues("quantity");
        if (currentValue < 5){
            setValue("quantity", currentValue + 1, {
                shouldValidate: true,
                shouldDirty: true
            })
        }
    }
    return (
        <form onSubmit={handleSubmit(data=>onSubmit(data))}>
        <div className={"border-2 rounded-2xl h-120 w-90 flex flex-col justify-end"}
             style={{
                 backgroundImage: `url(${item.photo})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'top center',
             }}>

            <div className={"flex flex-col h-1/3 hover:h-2/3 active:h-2/3 transition-all duration-300 bg-linear-to-t from-black to-black/70 rounded-b-[inherit]"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h3 className={"z-1 font-gugi text-yellow-300 drop-shadow-special"}>{item.name}</h3>
                    <h3 className={"z-1 font-gugi text-yellow-300 text-sm drop-shadow-special"}>{moneyFormat.format(item.price)}</h3>
                </div>
                <div className={"flex flex-col h-full overflow-hidden text-sm justify-center items-center translate-y-4 group-hover:translate-y-0 transform group-hover:scale-125 active:translate-y-0 transition-all duration-300"}>
                    <h4 className={"m-2 font-audiowide"}>{item.description}</h4>
                    <h4 className={"m-2 font-audiowide"}><span className={"font-bold text-red-600"}>Notes:</span> {item.notes}</h4>
                </div>
                <div className={"flex flex-col grow justify-end m-1"}>
                    <div className={"flex row justify-between items-center"}>
                        <div className={"m-1"}>
                            <div className="max-w-xs mx-auto flex justify-center items-center flex-col">
                                <div className="relative flex items-center max-w-[8rem]">
                                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                            onClick={handleDecrement}
                                            disabled={watchQuantity == 1}
                                    >
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text" disabled={true} id="quantity-input" {...register(quantityInput, {valueAsNumber: true})} onChange={e => handleChange(e)} data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"1"}/>
                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                        onClick={handleIncrement}
                                            disabled={watchQuantity == 5}
                                    >
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button type={"submit"}
                            className="self-end m-1 rounded-lg relative w-36 h-11 cursor-pointer flex items-center border border-green-900 bg-green-900 group hover:bg-green-500 active:bg-green-500 active:border-green-500 overflow-hidden"
                        >
                  <span
                      className="text-gray-200 font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300"
                  >Add Item</span
                  >
                            <span
                                className="absolute right-0 h-full w-10 rounded-lg bg-green-900 hover:bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300"
                            >
                    <svg
                        className="svg w-8 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="12" x2="12" y1="5" y2="19"></line>
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                  </span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
        </form>
    );
};

export default MenuCard;