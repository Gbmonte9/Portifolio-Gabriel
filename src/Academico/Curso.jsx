import React, { useState, useEffect } from 'react';

import Palestra from './Palestra.jsx';

function Curso({url, urlPalestra}){
    const[curso, setCurso] = useState(null);
    
    async function getJson(url) {

        try {
          
            const response = await fetch(url);
    
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
      
            const json = await response.json();
            return json;
        
        } catch (error) {
            return console.error(error.message);
        }
    
    };
    
    useEffect(() => {
        getJson(url).then((data) => {
            if(data){
                setCurso(data.Curso);
            }
        });
    }, []);

    if (!curso) {
        return <p className='fs-3'>Carregando...</p>;
    }

    return(

        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                    <p className="display-4 text-center">{curso.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <ol className="list-group list-group-numbered">
                        {curso.cursos.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id || index}>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.nome}</div>
                                {item.descricao}
                            </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <Palestra url={urlPalestra}/>
                </div>
            </div>

        </div>

    );
}

export default Curso;