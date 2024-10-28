import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
    // let tabContent = 'Please click a button';
    const [selectedTopic, setSelectedTopic] = useState('Please click a button');

    function handleSelect (selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
      // tabContent = selectedButton;
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }

  return (
      <div>
        <Header />
        <main>
          <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
              <CoreConcept 
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                  image={ CORE_CONCEPTS[0].image }
              />

              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept 
                  title={CORE_CONCEPTS[2].title}
                  description={CORE_CONCEPTS[2].description}
                  image={ CORE_CONCEPTS[2].image }
              />
              <CoreConcept 
                  title={CORE_CONCEPTS[3].title}
                  description={CORE_CONCEPTS[3].description}
                  image={ CORE_CONCEPTS[3].image }
              />
            </ul>
          </section>
          <section id="example">
            <h2>Example</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')} >Component</TabButton>
              <TabButton  onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton  onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton  onSelect={() => handleSelect('state')}>Component</TabButton>
            </menu>
            {selectedTopic}
          </section>
        </main>
      </div>
  );
}

export default App;
