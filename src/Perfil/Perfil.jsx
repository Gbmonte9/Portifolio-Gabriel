
import Pessoa from './Pessoa.jsx';
import Profissional from './Profissional.jsx';
import Historico from './Historico.jsx';
import Idioma from './Idioma.jsx';

function Perfil({urlPerfil}){

    return(
        <>
            <Pessoa url={urlPerfil}/>
            <Profissional url={urlPerfil}/>
            <Historico url={urlPerfil}/>
            <Idioma url={urlPerfil}/>
        </>
    );
}

export default Perfil;