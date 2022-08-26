import './App.css';
import PreNavbar from './components/PreNavbar';
import NavbarComp from './components/NavbarComp'
import Slider from './components/Slider'
import {BrowserRouter as Router} from 'react-router-dom'
import {data} from './data/data'
import Footer from './components/Footer'
function App() {
    return (
        <Router>
             <PreNavbar/>
             <NavbarComp/>
            <Slider start={data.banner.start}/>
            <Footer footer={data.footer}/>
        </Router>
      
       
    );
}

export default App; 