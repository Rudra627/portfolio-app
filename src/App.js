import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Start from './component/Start';
import About from './component/About';
import Skill from './component/Skill';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
   <>
   <Navbar/>
   <Start/>

    <About/>
    <Skill/>
  <Project/>
 <Contact/>
  <Footer/>


   </>
  );
}

export default App;
