
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Errorpage from './Components/Errorpage';


function App() {
  return (
    <>
     <Router>
     <Navbar/> 
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="*" element={<Errorpage/>}></Route>

     </Routes>
     </Router>
      
     
    </>
  );
}

export default App;
