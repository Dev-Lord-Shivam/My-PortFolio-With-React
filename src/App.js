import Navbar from "./Components/NavBar/navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills"
import Experience from "./Components/Experiences/Experience";
import ContactMe from "./Components/ContactMe/ContactMe";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Intro/>
          <Skills/>
          <Projects/>
          <Experience/>
          <ContactMe/>
      </header>
    </div>
  );
}

export default App;
