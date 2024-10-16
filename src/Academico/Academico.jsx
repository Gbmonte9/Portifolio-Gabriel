import Formacao from "./Formacao.jsx";
import Atividade from "./Atividade.jsx";
import Curso from "./Curso.jsx";
import Qualificacao from "./Qualificacao.jsx";
import Experiencia from "./Experiencia.jsx";

function Academico({urlAcademico}){

  return(
        
        <>
          <Formacao url={urlAcademico}/>
          <Qualificacao url={urlAcademico}/>
          <Experiencia url={urlAcademico}/>
          <Atividade url={urlAcademico}/>
          <Curso url={urlAcademico} urlPalestra={urlAcademico}/>
        </>

    );
}

export default Academico;