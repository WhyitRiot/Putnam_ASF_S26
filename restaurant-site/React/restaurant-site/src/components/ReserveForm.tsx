import * as yup from "yup";
import type {InferType} from "yup";
import {type FieldValues, useForm} from "react-hook-form";
import gusGalaxyLogo from "../assets/Gus_Galaxy_Grill_logo2.png"
import {yupResolver} from "@hookform/resolvers/yup";

const ReserveForm = () => {
    const schema = yup.object().shape({
        firstName: yup.string().max(20).required("Must be 20 characters or less!"),
        lastName: yup.string().max(20).required("Must be 20 characters or less!"),
        email: yup.string().email("Must be an email!").required("Please enter your email."),
        partySize: yup.number().min(1).max(8).required("Must be 1 - 8"),
        date: yup
            .string()
            .required("Date is required")
            .matches(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
        time: yup
            .string()
            .required("Must enter a time!")
            .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Must be a valid time"),
        seatingPref: yup.string().required("Please select a seating preference."),
        newsletter: yup.boolean(),
        notes: yup.string()
    })
    type formData = InferType<typeof schema>;

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        defaultValues:{
            time: "",
            date: "1999/01/01",
            newsletter: false,
            seatingPref: "Indoor",
        },
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data : FieldValues) =>{
        const parsedData : formData = await schema.validate(data);
        console.log(parsedData);
        reset();
    }

    const fnameInput = "firstName";
    const lnameInput = "lastName";
    const emailInput = "email";
    const partyInput = "partySize";
    const dateInput = "date";
    const timeInput = "time";
    const seatingInput = "seatingPref";
    const newInput = "newsletter";
    const notesInput = "notes";

    return (

            <form onSubmit={handleSubmit(e => onSubmit(e))}
            className={"max-w-[75%] font-audiowide mx-auto border rounded-lg p-3 bg-white/25 grid sm:grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-6 gap-2 lg:[grid-template-areas:'name_name_name'_'email_email_news'_'party_seating_seating'_'date_date_.'_'notes_notes_notes'_'notes_notes_notes'_'gus_reset_submit'] [grid-template-areas:'name'_'email'_'news'_'party'_'seating'_'date'_'time'_'notes'_'gus'_'reset'_'submit']"}
            >
                <div className={"[grid-area:name] flex flex-col md:flex-row grow justify-between gap-3"}>
                    <div className={"flex flex-col grow gap-1"}>
                        <div className={"flex flex-col"}>
                            <label htmlFor={fnameInput}>First Name</label>
                            <p className={"text-xs text-red-300 h-full"}>{errors.firstName?.message}</p>

                        </div>
                        <input type="text" id={fnameInput} {...register(fnameInput)} placeholder={"Dark"} className={"border border-white/50 rounded p-1"}/>

                    </div>
                    <div className={"flex flex-col grow gap-1"}>
                        <div className={"flex-col"}>
                            <label htmlFor={lnameInput}>Last Name</label>
                            <p className={"text-xs text-red-300 h-full"}>{errors.lastName?.message}</p>
                        </div>
                        <input type="text" id={lnameInput} {...register(lnameInput)} placeholder={"Helmet"} className={"border border-white/50 rounded p-1"}/>
                    </div>
                </div>
                <div className={"[grid-area:email] flex flex-col"}>
                    <div>
                        <label htmlFor={emailInput}>Email</label>
                        <p className={"text-xs text-red-300 h-full"}>{errors.email?.message}</p>
                    </div>
                    <input type="text" id={emailInput} {...register(emailInput)} placeholder={"lonestar@spaceballs.com"} className={"border border-white/50 rounded p-1"}/>
                </div>
                <div className={"[grid-area:date] flex grow justify-between gap-3"}>
                    <div className={"flex flex-col"}>
                        <label htmlFor={dateInput}>Date</label>
                        <p className={"text-xs text-red-300 h-full"}>{errors.date?.message}</p>
                        <input type="date" id={dateInput} {...register(dateInput)} className={"border border-white/50 rounded p-1"}/>
                    </div>
                    <div className={"flex flex-col"}>
                        <label htmlFor={timeInput}>Time</label>
                        <p className={"text-xs text-red-300 h-full"}>{errors.time?.message}</p>
                        <input type="time" id={timeInput} {...register(timeInput)} className={"border border-white/50 rounded p-1"}/>
                    </div>
                </div>
                <div className="[grid-area:party] flex items-center gap-2">
                    <label htmlFor="inputGroupSelect01">Party Size</label>
                    <select id="inputGroupSelect01" {...register(partyInput, {valueAsNumber: true})}
                            className={"border border-white/50 rounded p-1"}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
                <div className={"[grid-area:seating] flex flex-col justify-center"}>
                    <fieldset>
                        <p className={"text-xs text-red-300 h-full"}>{errors.seatingPref?.message}</p>
                        <div className="flex space-x-2 border-[3px]  border-yellow-600 rounded-xl select-none">
                            <label
                                className="radio flex grow items-center justify-center rounded-lg p-1 cursor-pointer">
                                <input type="radio" {...register(seatingInput)} value={"Indoor"} className="peer hidden"
                                       defaultChecked
                                       />
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[orangered] peer-checked:to-[red] peer-checked:text-white text-white/50 p-2 rounded-lg transition duration-150 ease-in-out">Indoor</span>
                            </label>
                            <label
                                className="radio flex grow items-center justify-center rounded-lg p-1 cursor-pointer">
                                <input type="radio" {...register(seatingInput)} value={"Outdoor"} className="peer hidden"/>
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[orangered] peer-checked:to-[red] peer-checked:text-white text-white/50 p-2 rounded-lg transition duration-150 ease-in-out">Outdoor</span>
                            </label>
                            <label
                                className="radio flex grow items-center justify-center rounded-lg p-1 cursor-pointer">
                                <input type="radio" {...register(seatingInput)} value={"Spaceport"} className="peer hidden"/>
                                <span
                                    className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[orangered] peer-checked:to-[red] peer-checked:text-white text-white/50 p-2 rounded-lg transition duration-150 ease-in-out">Spaceport</span>
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className={"[grid-area:news] flex flex-row justify-center items-center gap-2 place-content-center"}>
                    <input className="form-check-input" type="checkbox" id="inlineFormCheck"
                           {...register(newInput)}/>
                    <label className="form-check-label" htmlFor="inlineFormCheck">
                        Newsletter Opt-In
                    </label>
                </div>
                <div className={"[grid-area:notes] flex flex-col h-full w-full"}>
                    <label htmlFor="notesInput">Notes</label>
                    <div className={"flex-1"}>
                        <input type="text" id="notesInput" className={"w-full h-full border border-white/50 rounded p-1"}
                            {...register(notesInput)}
                               placeholder="Dietary restrictions, special instructions..."
                        />
                    </div>
                </div>
                <div className={"[grid-area:gus] flex justify-center align-middle md:justify-start"}>
                    <img src={gusGalaxyLogo} alt="Gus Galaxy!" className={"h-20 md:h-24 object-cover"}/>
                </div>
                <div className={"[grid-area:reset] flex p-2 items-center"}>
                    <button type={"reset"} className="grow h-14 bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]" />
                        Reset
                    </button>
                </div>
                <div className={"[grid-area:submit] flex p-2 items-center"}>
                    <button type={"submit"} className="bg-white/50 hover:bg-white text-center w-full rounded-2xl h-14 relative text-black text-xl font-semibold group transition-all duration-500">
                        <div className="bg-green-900 hover:bg-green-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-98/100 z-10 duration-500">
                            <svg className={"rotate-180"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
                                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
                                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000" />
                            </svg>
                        </div>
                        <p className="translate-x-2">Submit</p>
                    </button>
                </div>
            </form>
    );
};

export default ReserveForm;