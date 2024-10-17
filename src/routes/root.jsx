import { Outlet, Link, useNavigate, useEffect } from "react-router-dom";
import Header from "./Header.jsx";

import Perfil from "../Perfil/Perfil.jsx";

import Footer from "./Footer.jsx";

import './css/body.css';

// Json

export default function Root() {
  const navigate = useNavigate();

    useEffect(() => {
        const currentPath = window.location.pathname.replace('/portifolio-gabriel', '');

        // Verifica se a rota atual não é válida e redireciona para a página inicial
        if (
            currentPath !== '/' &&
            currentPath !== '/perfil' &&
            currentPath !== '/Perfil' &&
            currentPath !== '/academico' &&
            currentPath !== '/Academico' &&
            currentPath !== '/portifolio' &&
            currentPath !== '/Portifolio'
        ) {
            navigate('/');
        }
    }, [navigate]);
  
    return (
      <>
        <div id="sidebar">
          <nav className="navbar"> 
            <Header vperfil='Perfil' vacademico='Academico' vportifolio='Portifolio' />
          </nav>
        </div>
        <div id="detail">
            <div className="outlet"> 
                <Outlet />
            </div>
            <div className="footer"> 
              <Footer />
            </div>
        </div>
      </>
    );
  }