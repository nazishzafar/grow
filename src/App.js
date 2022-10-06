import './App.css';

import NavbarComp from './components/NavbarComp'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { data } from './data/data'
import Footer from './components/Footer'
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
import CreateBlog from "./CommunityBlogs/CreateBlog";
import Blogs from "./CommunityBlogs/Blogs";
import Blog from "./CommunityBlogs/Blog";

function App() {


    return (


        <Router>

            <NavbarComp />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/assessment' element={<Assessments />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/diet' element={<Diet />} />
                <Route path='/Psychlogical' element={<Psychlogical />} />
                <Route path='/Autism' element={<Autism />} />
                <Route path='/Community' element={<Community />} />
                <Route path='/Activities' element={<Activities />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Login' element={<Login />} />



                <Route path="create-blog" element={<CreateBlog />} />
        <Route path="update-blog/:blogId" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogId" element={<Blog />} />
        <Route path="*" element={<div>Page Not Found ):</div>} />


            </Routes>
            <Footer footer={data.footer} />
        </Router>



    );
}

export default App; 