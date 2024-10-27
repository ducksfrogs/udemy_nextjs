import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
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
              <TabButton >Component</TabButton>
              <TabButton >JSX</TabButton>
              <TabButton >Props</TabButton>
              <TabButton >Component</TabButton>

            </menu>
          </section>


          <h2>Time to get started!</h2>
        </main>
      </div>
  );
}

export default App;
