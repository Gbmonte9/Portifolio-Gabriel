import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

import Perfil from "../Perfil/Perfil.jsx";

import Footer from "./Footer.jsx";

import './css/body.css';

// Json

export default function Root() {
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