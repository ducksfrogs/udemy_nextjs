import { useState } from "react";

import Haeder from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";


function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment:1000,
        annualInvenstment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput, 
                [inputIdentifier]: newValue
            }
        });
    }

  return (
    <>
      <Haeder />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App
