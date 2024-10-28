import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

export default function Examples () {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect (selectedButton) {
      setSelectedTopic(selectedButton);
    }
console.log('APP COMPONENT EXECUTING');
let tabContent =  <p>Please select a topic.</p>;

if (selectedTopic){
  tabContent = (
    <div id="id-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code> {EXAMPLES[selectedTopic].code} </code>
          </pre>
    </div>
  );
}

return (
          <Section title="Examples" id="examples">
            <Tabs 
                buttonsContainer="menu"
                buttons={
                <>
                    <TabButton isSelected={selectedTopic=='components'} onClick={() => handleSelect('components')} >Component</TabButton>
                    <TabButton isSelected={selectedTopic=='jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic=='porps'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic=='state'} onClick={() => handleSelect('state')}>Component</TabButton>
                </>
                }>

                 {tabContent} 
            </Tabs>

          </Section>
)

}