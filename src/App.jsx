import './App.css';
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, expertise, volunteer } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <nav>
        <div className="divider">
            <button
              className="button button-one"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="button"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
        </div>
      </nav>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
	      <More
        languages={languages}
        habilities={habilities}
        expertise={expertise}
        volunteer={volunteer}
	      />
    </div>
  );
}

export default App;
