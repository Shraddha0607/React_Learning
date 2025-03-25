
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header/Header.jsx";
import EachExample from "./Components/Example/EachExample.jsx";
import TabButton from "./Components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent ] = useState();
  const[isTabSelected, setIsTabSelected] = useState(false);

  function selectTab(title) {
    setIsTabSelected(true);
    setTabContent(title);
  }

  let content = <p>Nothing selected</p>;
  if(tabContent ){
    content = <EachExample
    details={EXAMPLES[tabContent]}/>
  } 

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h1>Examples</h1>
          <menu>
            <TabButton 
            onClickHandler={() => selectTab("components")}
            isTabSelected={isTabSelected && tabContent ==='components'}
            >
              Component
            </TabButton>
            <TabButton onClickHandler={() => selectTab("jsx")}
              isTabSelected={isTabSelected && tabContent ==='jsx'}
              >JSX</TabButton>
            <TabButton onClickHandler={() => selectTab("props")}
              isTabSelected={isTabSelected && tabContent ==='props'}
              >Props</TabButton>
            <TabButton onClickHandler={() => selectTab("state")}
              isTabSelected={isTabSelected && tabContent ==='state'}
              >State</TabButton>
          </menu>
        </section>
        {content}
      </main>
    </div>
  );
}


export default App;
