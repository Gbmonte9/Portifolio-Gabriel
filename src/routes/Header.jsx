import { Link } from "react-router-dom";

import config from 'Json/Perfil.json';

function Header({vperfil, vacademico, vportifolio}){
    const gabriel = config.Pessoa;

    return(

        <div className="container-fluid ">
            
            <a className="navbar-brand text-primary text-light" href="#">
                <img src={gabriel.logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                Portfolio
            </a>

            <ul className="nav justify-content-end ">
                <li className="nav-item">
                    <Link to={vperfil} className="nav-link link-custom">{vperfil}</Link>
                </li>
                <li className="nav-item">
                    <Link to={vacademico} className="nav-link link-custom">{vacademico}</Link>
                </li>
                <li className="nav-item">
                    <Link to={vportifolio} className="nav-link link-custom">{vportifolio}</Link>
                </li>
            </ul>

        </div>

    );
}

export default Header;