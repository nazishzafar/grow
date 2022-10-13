import './App.css';

import NavbarComp from './components/NavbarComp'
import NavbarSection from './components/NavbarSection';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { dataFooter } from './data/data'
// import Footer from './components/Footer'
import Footer from './components/Footer/Footercomp';
import Home from './Home'
import Assessments from './Assessments'
import Psychlogical from './Psychlogical'
import About from './About'
import Articles from './Articles'
import Autism from './Autism'
import Community from './Community'
import Activities from './Activities'
import Diet from './Diet'
import Contact from './Contact'
import Signup from './Signup'
import Login from './Login'
import AdDiet from './AdDiet'
import Autistic from './Autistic';
import OutdoorAutistic from './OutdoorAutistic';
import AutismAct from './AutismAct';
import AdhdActivities from './AdhdActivities';
import SensoryAct from './SensoryAct';
import Social from './Social';


function App() {


    return (


        <Router>

            {/* <NavbarComp /> */}
            <NavbarSection/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/assessment' element={<Assessments />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/diet' element={<Diet />} />
                <Route path='/Psychlogical' element={<Psychlogical/>} />
                <Route path='/AdhdActivities' element={<AdhdActivities/>} />
                <Route path='/Autism' element={<Autism />} />
                <Route path='/Community' element={<Community />} />
                <Route path='/Activities' element={<Activities />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/AdDiet' element={<AdDiet />} />
                <Route path='/Autistic' element={<Autistic />} />
                <Route path='/OutdoorAutistic' element={<OutdoorAutistic />} />
                <Route path='/SensoryAct' element={<SensoryAct />} />
                <Route path='/Social' element={<Social />} />
                <Route path='/AutismAct' element={<AutismAct />} />
                
                





             


            </Routes>
            <Footer/>
        </Router>



    );
}

export default App; 