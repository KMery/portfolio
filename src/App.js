import './App.css';
import { AboutMe } from './components/aboutme/AboutMe';
import { Contact } from './components/contact/Contact';
import { NavBar } from './components/navbar/NavBar';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div >
      <NavBar className="bg-color" />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
