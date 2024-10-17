import { Outlet, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import './css/body.css';

// Json

export default function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname.replace('/portifolio-gabriel', '').toLowerCase(); // Converte para minúsculas

    // Verifica se a rota atual não é válida e redireciona para a página inicial
    const validPaths = ['/', '/perfil', '/academico', '/portifolio'];
    if (!validPaths.includes(currentPath)) {
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