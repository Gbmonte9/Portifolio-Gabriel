import React, { useState, useEffect } from 'react';

function Atividade({url}){
    const[atividade, setAtividade] = useState(null);
    
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
                setAtividade(data.Atividade); 
            }
        });
    }, []);

    if (!atividade) {
        return <p className='fs-3'>Carregando...</p>;
    }

    return(
        
        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                    <p className="display-4 text-center">{atividade.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <ul className="list-group">
                        {atividade.atividades.map((atividade, index) => (
                            <li className="list-group-item" key={atividade.id || index}>
                                {atividade}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

    );
}

export default Atividade;