import './App.css';
import PreNavbar from './components/PreNavbar';
import NavbarComp from './components/NavbarComp'
import Slider from './components/Slider'
import {BrowserRouter as Router} from 'react-router-dom'
import {data} from './data/data'
function App() {
    return (
        <Router>
             <PreNavbar/>
             <NavbarComp/>
             <Slider/>
             {/* <Slider start={data.banner.start[0]}/> */}
        </Router>
      
       
    );
}

export default App; 