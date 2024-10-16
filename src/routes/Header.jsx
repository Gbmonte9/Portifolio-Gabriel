import { Link } from "react-router-dom";

import img from "./img/img.png";

function Header({vperfil, vacademico, vportifolio}){
    return(

        <div className="container-fluid ">
            
            <a className="navbar-brand text-primary text-light" href="#">
                <img src={img} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
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