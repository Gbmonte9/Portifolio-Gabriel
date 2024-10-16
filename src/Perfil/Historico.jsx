import React, { useState, useEffect } from 'react';

function Historico({url}){
    const[historico, setHistorico] = useState(null);
    
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
                    setHistorico(data.Historico); 
                }
            });
        }, []);

        if (!historico) {
            return <p className='fs-3'>Carregando...</p>;
        }

    return(

        <div className="container text-start">
            <div className="row justify-content-start">
                <div className="col-12 mb-4"> 
                    <p className="display-5">{historico.titulo}</p>
                    <p className='text-break fs-3'>{historico.jornada}</p>
                </div>
            </div>
        </div>

    );
}

export default Historico;