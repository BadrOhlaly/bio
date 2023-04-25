import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { container, Figure, Navbar, NavItem } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap';
import { useState } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  const [divToShow, setDivToShow] = useState(
    <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3 className='d-flex justify-content-center'>Badr Ohlale
              </h3>
            </div>
            <div className='card-text d-flex justify-content-center p-4'>
              <p>Je suis un etudiant en genie informatique patione par le developpement. Je cherche a savoir plus et etre capable de creer et developper quoi que ce soit. Ma plus grande motivation pour le moment est l'intelligence artificielle.</p>
            </div>
          </div>
        </div>
  );
  function onClic(divName) {
    setDivToShow(divName);
    if (divName === "Acceuil") {
      setDivToShow(
        <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3 className='d-flex justify-content-center'>Badr Ohlale
              </h3>
            </div>
            <div className='card-text d-flex justify-content-center p-4'>
              <p>Je suis un etudiant en genie informatique patione par le developpement. Je cherche a savoir plus et etre capable de creer et developper quoi que ce soit. Ma plus grande motivation pour le moment est l'intelligence artificielle.</p>
            </div>
          </div>
        </div>
      )
    }
    else if (divName === "Formations") {
      setDivToShow(
        <div>
          <div className='card shadow w-50 h-50 mx-auto mt-5'>
            <div className='card border-primary rounded-lg'>
              <div className='card-header'>
                <h4 className='d-flex justify-content-center'>Bac - Science Physique
                </h4>
                <h5 className='d-flex justify-content-center'>Etablissement Elaraki</h5>
                <h6 className='d-flex justify-content-center'>2017-2018</h6>
              </div>
            </div>
          </div>
          <div className='card shadow w-50 h-50 mx-auto mt-5'>
            <div className='card border-primary rounded-lg'>
              <div className='card-header'>
                <h4 className='d-flex justify-content-center'>Annee preparatoire</h4>
                <h5 className='d-flex justify-content-center'>Faculte des sciences et techniques</h5>
                <h6 className='d-flex justify-content-center'>2018-2019</h6>
              </div>
            </div>
          </div>
          <div className='card shadow w-50 h-50 mx-auto mt-5'>
            <div className='card border-primary rounded-lg'>
              <div className='card-header'>
                <h4 className='d-flex justify-content-center'>Ingenieurie informatique et reseau</h4>
                <h5 className='d-flex justify-content-center'>Ecole Marocaine des sciences de l'ingenieur</h5>
                <h6 className='d-flex justify-content-center'>2019-2024</h6>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (divName === "Experiences") {
      setDivToShow(
        <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3>Stage d'ete 2022</h3>
              <h5>Creation d'un site web pour une Ecole</h5>
              <h4>technologies:</h4>
              <ul >
                <li>Java</li>
                <li>Sprint boot</li>
                <li>Angular</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
    else if (divName === "Projets") {
      setDivToShow(
        <div>
        <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3>Parking</h3>
              <h4>technologies:</h4>
              <h5>PHP</h5>
            </div>
          </div>
        </div>
        <div className='card shadow w-50 h-50 mx-auto mt-5'>
        <div className='card border-primary rounded-lg'>
          <div className='card-header'>
            <h3>Gestion de render-vous</h3>
            <h4>technologies:</h4>
            <h5>C#</h5>
          </div>
        </div>
      </div>
      <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3>Location de voitures</h3>
              <h4>technologies:</h4>
              <h5>Python</h5>
            </div>
          </div>
        </div>
        <div className='card shadow w-50 h-50 mx-auto mt-5'>
          <div className='card border-primary rounded-lg'>
            <div className='card-header'>
              <h3>Stock</h3>
              <h4>technologies:</h4>
              <h5>Java</h5>
            </div>
          </div>
        </div>
      </div>
      )
    }
    else if(divName==="Certifications")
    {
      setDivToShow(
        <div>
          <div className='d-flex'>
        <div className='card shadow w-25 h-25 mt-5' style={{position:'relative',marginLeft:'20%'}}>
            <div className='card border-primary '>
              <div className='card-header'></div>
              <img className='bg-size' src={require('./images/cloudComputingpng.png')}></img>
              </div>
              <h6 className='d-flex justify-content-center'>Cloud Computing</h6>
              </div>
              <div className='card shadow w-25 h-25 mt-5' style={{position:'relative',marginLeft:'20%'}}>
            <div className='card border-primary '>
              <div className='card-header'></div>
              <img className='bg-size' src={require('./images/nodejs.png')}></img>
              </div>
              <h6 className='d-flex justify-content-center'>nodejs</h6>
              </div>
              </div>
              <div className='d-flex'>
        <div className='card shadow w-25 h-25 mt-5' style={{position:'relative',marginLeft:'20%'}}>
            <div className='card border-primary '>
              <div className='card-header'></div>
              <img className='bg-size' src={require('./images/devopsimg.png')}></img>
              </div>
              <h6 className='d-flex justify-content-center'>DevOps</h6>
              </div>
              <div className='card shadow w-25 h-25 mt-5' style={{position:'relative',marginLeft:'20%'}}>
            <div className='card border-primary '>
              <div className='card-header'></div>
              <img className='bg-size' src={require('./images/pythonimg.png')}></img>
              </div>
              <h6 className='d-flex justify-content-center'>Python</h6>
              </div>
              </div>
              
              <div className='card shadow w-25 h-25 mt-5' style={{position:'relative',marginLeft:'20%'}}>
            <div className='card border-primary '>
              <div className='card-header'></div>
              <img className='bg-size' src={require('./images/scrumpng.png')}></img>
              </div>
              <h6 className='d-flex justify-content-center'>Scrum and Agile Method</h6>
              </div>
              
        </div>
      )
    }
  }
  return (
    <div className='d-flex flex-column min-vh-100'>
      <container className='d-flex align-items-center justify-content-center bg-primary' bg-blue>
        <figure>
          <img className='rounded-circle mt-4 ml-3' alt='Badr Ohlale' src={require('./images/Badr.png')} width={200} height={200}></img>
          <div className='text-white text-center'>
            <h2 className='mt-4'>Etud. Badr Ohlale</h2>
            <h4 className='mt-4 mb-5'> Ingenieur Informatique</h4>
          </div>
        </figure>
      </container>
      <div>
        <BrowserRouter>
          <Navbar bg="light" variant="dark">
            <Nav className='navbar-nav mx-auto'>
              <NavItem className='mr-5 d-flex'>
                <img src={require('./images/home.png')}></img>
                <Nav.Link as={Link} to="/" onClick={() => onClic("Acceuil")} className="nav-item active text-decoration-none fs-16 text-primary">Acceuil</Nav.Link>
              </NavItem>
              <NavItem className='mr-5 d-flex mx-1'>
              <img src={require('./images/exp.png')}></img>
                <Nav.Link as={Link} to="/Experiences" onClick={() => onClic("Experiences")} className='nav-item active text-decoration-none text-primary'>Experiences</Nav.Link>
              </NavItem>
              <NavItem className='mr-5 d-flex'>
              <img src={require('./images/skills.png')}></img>
                <Nav.Link as={Link} to="/Formations" onClick={() => onClic("Formations")} className='nav-item active text-decoration-none text-primary'>Formations</Nav.Link>
              </NavItem>
              <NavItem className='mr-5 d-flex'>
              <img src={require('./images/project.png')}></img>
                <Nav.Link as={Link} to="/Projets" onClick={() => onClic("Projets")} className='nav-item active text-decoration-none text-primary'>Projets</Nav.Link>
              </NavItem>
              <NavItem className='mr-5 d-flex'>
              <img src={require('./images/certif.png')}></img>
                <Nav.Link as={Link} to="/Certifications" onClick={() => onClic("Certifications")} className='nav-item active text-decoration-none text-primary'>Certifications</Nav.Link>
              </NavItem>
            </Nav>
          </Navbar>
        </BrowserRouter>
      </div>
      {divToShow}
      <footer className='mt-auto'>
        <div className='d-flex justify-content-center'>
          <a href='https://www.facebook.com/badr.ohlale/'>
           <img src={require('./images/facebook.png')}></img>
           </a>
           <a href='https://www.linkedin.com/in/badr-ohlale-57a927216/'>
           <img src={require('./images/linkedin.png')}></img>
           </a>
           <a href='https://github.com/BadrOhlaly/'>
           <img src={require('./images/github.png')}></img>
           </a>
         </div>
        
      </footer>
    </div>
  );
}

export default App;

