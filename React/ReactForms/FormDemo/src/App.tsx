import { type ChangeEvent} from 'react'
import {type FieldValues, useForm} from 'react-hook-form';
import * as yup from 'yup';
import './App.css'
import {type InferType} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function App() {

  const schema = yup.object().shape({
    fname: yup.string().min(5, "Must be more than 5 characters!").required(),
    lname: yup.string().transform(value => (value=== "" ? null : value)).nullable().min(1, "Name must be more than one character.").max(6, "Must be smaller than 6 characters"),
    age: yup.number().positive("Invalid number!").integer("Invalid number!").max(100, "You're not that old are you?"),
    email: yup.string().email("Must be a valid email").required(),
    pass: yup.string().min(12, "Must be at least 12 characters").required()
  })

  type formData = InferType<typeof schema>;

  const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const nameInput = "fname";
  const lastInput = "lname";
  const emailInput = "email";
  const ageInput = "age";
  const passInput = "pass";

  const onSubmit = async (data : FieldValues) => {
    let parsedData : formData = await schema.validate(data);
    console.log(parsedData);
    console.log("yippie");
    reset();
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const {name, value} = e.target;
    setValue(name as keyof formData, value as any, {
      shouldValidate: true,
      shouldDirty: true
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit(data => onSubmit(data))}>
        <label htmlFor={nameInput}>First Name
          <input type="text" {...register(nameInput)} id={nameInput} onChange={e => handleChange(e)}/>
          {errors.fname && <span>{errors.fname.message}</span>}
        </label>
        <label htmlFor={lastInput}>Last Name
          <input type="text" {...register(lastInput)} id={lastInput} onChange={e => handleChange(e)}/>
          {errors.lname && <span>{errors.lname.message}</span>}
        </label>
        <label htmlFor={emailInput}>Email
          <input type="text" {...register(emailInput)} id={emailInput} onChange={e => handleChange(e)}/>
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label htmlFor={ageInput}>Age
          <input type="number" {...register(ageInput)} id={ageInput} onChange={e=>handleChange(e)}/>
          {errors.age && <span>{errors.age.message}</span>}
        </label>
        <label htmlFor={passInput}>Password
          <input type="password" {...register(passInput)} id={passInput} onChange={e=>handleChange(e)}/>
          {errors.pass && <span>{errors.pass.message}</span>}
        </label>
        <div>
          <button type={"submit"}>Submit</button>
          <button type={"reset"}>Reset</button>
        </div>
      </form>
    </>
  )
}

export default App
