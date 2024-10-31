import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment:1000,
        anualInvenstment: 1200,
        expectedReturn: 6,
        duraion: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput();
        
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input type="number" required/>
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input type="number" required/>
                    </p>

                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input type="number" required/>
                    </p>
                    <p>
                        <label>Someting</label>
                        <input type="number" required/>
                    </p>

                </div>
            </section>
        </>
    )
}