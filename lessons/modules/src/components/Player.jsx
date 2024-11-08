import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setenteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] =  useState(false);

  //  function handleChange(event) {
  //   // setSubmitted(false);
  //   setenteredPlayerName(event.target.value);
  //  }

   function handleClick () {
      // setSubmitted(true);
    setenteredPlayerName(playerName.current.value)
    playerName.current.value = '';

   }

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName: 'unKnown ennn'}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'unKnown ennn'}</h2>
      <p>
        <input 
          ref={playerName} 
          type="text" 
          // onChange={handleChange} 
          // value={enteredPlayerName}
        />

        <button onClick={handleClick} >Set Name</button>
         
      </p>
    </section>
  );
}
