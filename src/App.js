import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './App.css';
import Typed from 'react-typed';
import Script from './script';

function App() {
  return (
    <div className='App' id='page-top'>
      {/* ---------- Navigation ---------- */}
      <div className='bg-img'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id='mainNav'>
          <div className="container">
            <a className="navbar-brand fs-2" href="#page-top">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              MENU
              <FontAwesomeIcon className='ms-1' icon={faBars}/>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav text-uppercase my-3">
                <li className="nav-item ">
                  <a className="nav-link" href="#">services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">about</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> 

        {/* ---------- Header ---------- */}
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

        {/* ---------- Services ---------- */}
        <section className='page-section' id='services' >
          <div className='container'>
            <div className='text-center'>
              <div className='section-heading' >Services</div>
              <div className='section-subheading'>Lorem ipsum dolor sit amet consectetur.</div>
            </div>
            <div className='row text-center'>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <FontAwesomeIcon className='fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa-stack-1x fa-inverse' icon={faCartShopping} />
                </span>
                <h4 className='my-3'>E-Commerce</h4>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <FontAwesomeIcon className='fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa-stack-1x fa-inverse' icon={faLaptopCode} />
                </span>
                <h4 className='my-3'>Responsive Design</h4>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='col-md-4'>
                <span className='fa-stack fa-4x'>
                  <FontAwesomeIcon className='fa-stack-2x' icon={faCircle} />
                  <FontAwesomeIcon className='fa-stack-1x fa-inverse' icon={faLock} />
                </span>
                <h4 className='my-3'>Web Security</h4>
                <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Portfolio Grid ---------- */}
        <section className='page-section bg-light' id='portfolio'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>Portfolio</h2>
              <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className='row'>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 1 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/1.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Threads</div>
                    <div className='portfolio-caption-subheading text-muted'>Illustration</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 2 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/2.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Explore</div>
                    <div className='portfolio-caption-subheading text-muted'>Graphic Design</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 3 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/3.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Finish</div>
                    <div className='portfolio-caption-subheading text-muted'>Identity</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 4 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/4.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Lines</div>
                    <div className='portfolio-caption-subheading text-muted'>Branding</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 5 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/5.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Southwest</div>
                    <div className='portfolio-caption-subheading text-muted'>Website Design</div>
                  </div>
                </div>
              </div>

              <div className='col-lg-4 col-sm-6 mb-4'>
                {/* ---------- Portfolio item 6 ---------- */}
                <div className='portfolio-item'>
                  <a className='portfolio-link' data-bs-toggle="modal" href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <FontAwesomeIcon className='fa-3x text-white' icon={faPlus}/>
                      </div>
                    </div>
                    <img className='img-fluid' src={require("./assets/img/portfolio/6.jpg")} alt=''/>
                  </a>
                  <div className='portfolio-caption'>
                    <div className='portfolio-caption-heading'>Window</div>
                    <div className='portfolio-caption-subheading text-muted'>Photography</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section className='page-section' id='about'>
          <div className='container'>
            <div className='text-center'>
              <h2 className='section-heading text-uppercase'>About</h2>
              <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className='timeline'>
              <li>
                <div className='timeline-image'>
                  <img className='rounded-circle img-fluid' src={require("./assets/img/about/1.jpg")} alt=''/>
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4>2009-2011</h4>
                    <h4 className='subheading'>Our Humble Beginnings</h4>
                  </div>
                  <div className='timeline-body'>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>

              <li className='timeline-inverted'>
                <div className='timeline-image'>
                  <img className='rounded-circle img-fluid' src={require("./assets/img/about/2.jpg")} alt=''/>
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4>March 2011</h4>
                    <h4 className='subheading'>An Agency is Born</h4>
                  </div>
                  <div className='timeline-body'>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>

              <li>
                <div className='timeline-image'>
                  <img className='rounded-circle img-fluid' src={require("./assets/img/about/3.jpg")} alt=''/>
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4>December 2015</h4>
                    <h4 className='subheading'>Transition to Full Service</h4>
                  </div>
                  <div className='timeline-body'>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>

              <li className='timeline-inverted'>
                <div className='timeline-image'>
                  <img className='rounded-circle img-fluid' src={require("./assets/img/about/4.jpg")} alt=''/>
                </div>
                <div className='timeline-panel'>
                  <div className='timeline-heading'>
                    <h4>July 2020</h4>
                    <h4 className='subheading'>Phase Two Expansion</h4>
                  </div>
                  <div className='timeline-body'>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </section>
    </div>
  );
}

export default App;
