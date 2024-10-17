import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import './css/body.css';

export default function Root() {
    const location = useLocation();

    useEffect(() => {
      // Verifica se a página foi recarregada
      if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
        // Redireciona para a URL base ao recarregar a página
        window.location.href = "https://gbmonte9.github.io/portifolio-gabriel/";
      }
    }, [location]);
  
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