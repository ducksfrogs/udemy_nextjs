import Wrapper from "./components/Wrapper.js";
import Screen from "./components/Screen.js";
import ButtonBox from "./components/ButtonBox.js";
import Button from "./components/Button.js";

function App() {
  return (
    <Wrapper>
      <Screen value={"0"} />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {

          
            console.log("Button clicked");
          }}
          />
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
