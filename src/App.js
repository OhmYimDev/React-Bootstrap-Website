import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Typed from 'react-typed';

function App() {
  return (
    <div className='App' id='page-top'>
      {/* Navigation */}
      <div className='bg-img'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand fs-2" href="#page-top">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              MENU
              <FontAwesomeIcon className='ms-1' icon={faBars}/>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav text-uppercase my-3">
                <li class="nav-item ">
                  <a class="nav-link" href="#">services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">about</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 

        {/* Header */}
        <header className='header text-center d-flex align-items-center text-white'>
          <div className='container'>
            <div className='header-subheading'>Welcome To Our Studio!</div>
            <Typed
                strings={["It's Nice To Meet You"]}
                typeSpeed={40}
                className='header-heading'
            /><br/>
            <a href='#services' className='header-btn btn btn-xl text-uppercase text-white' >Tell Me More</a>
          </div>
        </header>
      </div>

        {/* Services */}
        <section className='page-section' id='services' >
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading' >Services</h2>
              <h3 className='section-subheading'>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
