import React from 'react'
import './Home.css';
import Card from './CardUI';
import { NavLink } from 'react-router-dom';
import img1 from "../assets/blog-august-1200x480.jpg"; 
import person3 from '../components/yf_logo.jpeg';
import img2 from "../assets/ehealth-tech.png";
import img4 from "../assets/download.png";
import img5 from "../assets/MythsInfographic-(002)_800.jpg";
const Home = () => {
    return (
        <>



        <div className="container">
        <div className="row header_row">
            <div className="col-sm header11">
            <h1 className="your_friend same">YOUR FRIEND.</h1>
            <h4 className="same yif">An Initiative by <span className="y">Youth</span> <span className="i">India</span> <span className="f">Foundation</span></h4>
            </div>
            <div className="col-sm header11 header-10">
            <img src={person3} width="300" height="300" alt="" loading="lazy"/>
            </div>
        </div>
    
    </div>
        <div className="container">
        <div className="about1">
            <h1 className="head_about">ABOUT CELLS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id iaculis turpis. Sed non arcu vitae lorem sagittis consequat. Praesent vel venenatis magna, nec iaculis purus. Pellentesque id mattis tellus, consequat porttitor nunc. Aenean dictum dapibus orci, nec pharetra neque fringilla ac. Vivamus id erat imperdiet, bibendum ex non, sollicitudin odio. Integer laoreet egestas lorem, sed dictum enim rutrum eu. Mauris ac finibus ante. Phasellus eget maximus augue. Proin aliquam consequat odio quis laoreet.</p>
            <NavLink to="/aboutcells" class="button1">Learn more</NavLink>
        </div>
    </div>


    <div id="slider">
   <input type="radio" name="slider" id="slide1"/>
   <input type="radio" name="slider" id="slide2"/>
   <input type="radio" name="slider" id="slide3"/>
   <input type="radio" name="slider" id="slide4"/>
   <div id="slides">
      <div id="overflow">
         <div className="inner">
            <div className="slide slide_1">
               <div className="slide-content">
                  <h2>Slide 1</h2>
                  <p>Content for Slide 1</p>
               </div>
            </div>
            <div className="slide slide_2">
               <div className="slide-content">
                  <h2>Slide 2</h2>
                  <p>Content for Slide 2</p>
               </div>
            </div>
            <div className="slide slide_3">
               <div className="slide-content">
                  <h2>Slide 3</h2>
                  <p>Content for Slide 3</p>
               </div>
            </div>
            <div className="slide slide_4">
               <div className="slide-content">
                  <h2>Slide 4</h2>
                  <p>Content for Slide 4</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>






    <div className="container-fluid nav bg bgstay">
        <div className="row">
        <div className="col-10 mx-auto">
        <h1 className="head1">E-Mental Health Services</h1>
        <p className="e_mental">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id iaculis turpis. Sed non arcu vitae lorem sagittis consequat. Praesent vel venenatis magna, nec iaculis purus. Pellentesque id mattis tellus, consequat porttitor nunc. Aenean dictum dapibus orci, nec pharetra neque fringilla ac. Vivamus id erat imperdiet, bibendum ex non, sollicitudin odio. Integer laoreet egestas lorem, sed dictum enim rutrum eu. Mauris ac finibus ante. Phasellus eget maximus augue. Proin aliquam consequat odio quis laoreet.</p>
        </div>
        </div></div>

        <div className="container-fluid d-flex align-items-center">
                <div className="row d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                    <div className="col-sm">
                    <NavLink to="/campaigns">
                        <Card  imgsrc={img1} title={"Campaigns"} desc={"Mental health is the level of psychological well-being or an absence of mental"} />
                        </NavLink>
                    </div>
                    <div className="col-sm">
                    <NavLink to="/mentalhealthservices">
                        <Card  imgsrc={img2} title={"Mental Health Services"} desc={" Mental health is the successful performance of the mental function resulting in productive activities"} />
                        </NavLink>
                    </div>
                    </div>
                    <div className ="container-fluid nav bg bgstay">
        <div className="row">
        <div className="col-10 mx-auto">
        <h1 className="head1">Career Empowerment</h1>
        <p className="e_mental">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id iaculis turpis. Sed non arcu vitae lorem sagittis consequat. Praesent vel venenatis magna, nec iaculis purus. Pellentesque id mattis tellus, consequat porttitor nunc. Aenean dictum dapibus orci, nec pharetra neque fringilla ac. Vivamus id erat imperdiet, bibendum ex non, sollicitudin odio. Integer laoreet egestas lorem, sed dictum enim rutrum eu. Mauris ac finibus ante. Phasellus eget maximus augue. Proin aliquam consequat odio quis laoreet.</p>
        </div>
        </div></div>
                    <div className="row d-flex justify-content-center">
                    <div className="col-sm">
                    <NavLink to="/internships">
                        <Card  imgsrc={img4} title={"Internships"} desc={"Mental illnesses are more common than cancer, diabetes, or heart disease."} />
                        </NavLink>
                    </div>
                   
                  
                    <div className="col-sm">
                    <NavLink to="/webinars">
                        <Card  imgsrc={img5} title={"Webinars"} desc={"Good mental health can improve life quality whereas poor mental health can worsen it"} />
                  </NavLink>
                    </div>
                    
                    </div>
                </div> 
                
            </div>


        </>
    );
};

export default Home;
