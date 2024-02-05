import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import TechSkills from './components/TechSkills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Showcase /> 
       <TechSkills />
       <Project />
      <Contact />
      <Footer />   
      </div>
  );
}

export default App;
