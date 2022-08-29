import './App.css';
import PreNavbar from './components/PreNavbar';
import NavbarComp from './components/NavbarComp'
import Slider from './components/Slider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {data} from './data/data'
import Footer from './components/Footer'
import Home from './Home'
import Assessments from './Assessments'
import About from './About'
import Articles  from './Articles'
import Community from './Community'
import Diet from './Diet'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'
import {ThemeProvide} from 'styled-components'
function App() {
    return (
        <Router>
            <PreNavbar/>
            <NavbarComp/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/assessment' element={<Assessments/>}/>
                <Route path='/articles' element={<Articles/>}/>
                <Route path='/diet' element={<Diet/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes>
             {/* <PreNavbar/>
             <NavbarComp/>
            <Slider start={data.banner.start}/>
            <Footer footer={data.footer}/> */}
            <Footer footer={data.footer}/>
        </Router>
      
       
    );
}

export default App; 