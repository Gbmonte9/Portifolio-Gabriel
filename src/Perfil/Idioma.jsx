import React, { useState, useEffect } from 'react';

function Idioma({url}){
    const[idioma, setIdioma] = useState(null);
    
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
                    setIdioma(data.Idioma); 
                }
            });
        }, []);

        if (!idioma) {
            return <p className='fs-3'>Carregando...</p>;
        }

    return(

        <div className="container text-start">

            <div className="row justify-content-start">
                <div className="col-12 mb-4"> 
                    <p className="display-5">{idioma.titulo}</p>
                </div>
            </div>

            <div className="row justify-content-start">
                {idioma.idiomas.map((idioma, index) => (
                    <div className="col-6 mb-4" key={index}>
                        <p className="text-break fs-2">{idioma}</p>
                    </div>
                ))}
            </div>

        </div>

        

    );
}

export default Idioma;