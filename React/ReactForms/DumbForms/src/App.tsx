import {useState, type SubmitEvent, type ChangeEvent} from 'react'
import './App.css'
type inputType = {
  first?: string
  pass?: string
  age?: number
}
function App() {
  const [data, setData] = useState<inputType>({});

  const passwordInputId = "pass";
  const ageInput = "age";
  const firstNameInput = "first"

  const handleSubmit = (e: SubmitEvent<HTMLFormElement> ) =>{
    e.preventDefault();
    console.log("shit");
    e.target.reset();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>{
    setData({...data, [e.target.id]:[e.target.value]})
    // switch(e.target.id){
    //   case(firstNameInput):
    //     setFirstName(e.target.value);
    //     break;
    //   case(ageInput):
    //     setAge(e.target.value);
    //     break;
    //   case(passwordInputId):
    //     setPassword(e.target.value);
    //     break;
    // }
  }

  return (
    <>
      <form onSubmit={e  => handleSubmit(e)}>
        <label htmlFor={firstNameInput}>First Name</label>
        <input id={firstNameInput} type="text" onChange={e => handleChange(e)}/>
        <label htmlFor={passwordInputId}>Password</label>
        <input id={passwordInputId} type="password" onChange={e => handleChange(e)}
        />
        <label htmlFor={ageInput}>Age</label>
        <input id={ageInput} type="number" onChange={e => handleChange(e)}/>
        <button type={"submit"}>Submit</button>
      </form>
    </>
  )
}

export default App
