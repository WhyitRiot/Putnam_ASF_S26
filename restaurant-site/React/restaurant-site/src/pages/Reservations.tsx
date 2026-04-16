import React from 'react';
import * as yup from "yup";
import {type InferType} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {type FieldValues, useForm} from "react-hook-form";

const Reservations = () => {
    const schema = yup.object().shape({
        firstName: yup.string().max(20).required("Must be 20 characters or less!"),
        lastName: yup.string().max(20).required("Must be 20 characters or less!"),
        email: yup.string().email("Must be an email!"),
        partySize: yup.number().min(1).max(8).required("Must be 1 - 8"),
        date: yup.date().required(),
        time: yup.string().datetime("Must be a time").required("Must enter a time!"),
        seatingPref: yup.string(),
        newsletter: yup.boolean(),
        notes: yup.string()
    })
    type formData = InferType<typeof schema>;

    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async (data : FieldValues) =>{
        const parsedData = await schema.validate(data);
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
        <div className={"bg-default min-h-screen w-full bg-cover bg-center bg-no-repeat"}>
            <form onSubmit={handleSubmit(e=>onSubmit(e))}>
                <div>
                    <label>First Name
                        <input type="text" {...register(fnameInput)}/>
                    </label>
                    <label>Last Name
                        <input type="text" {...register(lnameInput)}/>
                    </label>
                </div>
                <div>
                    <label>Email
                        <input type="email" {...register(emailInput)}/>
                    </label>
                </div>
                <div>

                </div>
                <label>Date
                    <input type="date" {...register(dateInput)}/>
                </label>
            </form>
        </div>
    );
};

export default Reservations;