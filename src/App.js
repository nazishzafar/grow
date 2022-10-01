import './App.css';

import NavbarComp from './components/NavbarComp'
import Slider from './components/Slider'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {data} from './data/data'
import Footer from './components/Footer'
import Home from './Home'
import Assessments from './Assessments'
import About from './About'
import Articles  from './Articles'
// import CommentApp from './CommentApp'
import Diet from './Diet'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'

function App() {


    return (

        
        <Router>
        
            <NavbarComp/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/assessment' element={<Assessments/>}/>
                <Route path='/articles' element={<Articles/>}/>
                <Route path='/diet' element={<Diet/>}/>
                {/* <Route path='/CommentApp' element={<CommentApp/>}/> */}
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Login' element={<Login/>}/>
            </Routes>
            <Footer footer={data.footer}/>
        </Router>
     
      
       
    );
}

export default App; 