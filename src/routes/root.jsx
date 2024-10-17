import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import './css/body.css';

// Json

export default function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

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
  }, [navigate, location]);

  useEffect(() => {
    // Redireciona para a URL base se a página for recarregada
    if (location.pathname === '/') {
      window.location.href = "https://gbmonte9.github.io/portifolio-gabriel";
    }
  }, [location.pathname]);
  
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