import './App.css';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='first'>
        <Navbar />
      </div>

      <div className='second'>
        <div  className='show'>
        <Showcase />
        </div>
        
        <div className='work'>
          <Project />
        </div>
        <div className='halla'>
          <Contact />
        </div>
        <div className='end'>
          <Footer />
        </div>
      </div>
      

    </div>
  );
}

export default App;
