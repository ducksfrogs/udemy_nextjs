import { useState } from "react";

import Header from "./components/Header/Header"
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState();

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer==='X' ? 'O': 'X');
  }
  

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id='players' className="highlight-player">
            <Player initialName='Player 1' symbol={"X"} isActive={activePlayer=== 'X'}/>
            <Player initialName='Player 2' symbol={"O"} isActive={activePlayer=== 'O'} />
          </ol>
          <GameBoard onSElectSquare={handleSelectSquare} actvePlayerSymbol={activePlayer}/>

      </div>
    </main> 
    </>
  );
}

export default App












