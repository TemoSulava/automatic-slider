import React, { useState } from "react";
import data from "./data";
import Person from "./components/Person";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const length = people.length;

  console.log(people);

  return (
    <section>
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => (
          <Person
            {...person}
            key={person.id}
            index={index}
            setIndex={setIndex}
            personIndex={personIndex}
            length={length}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
