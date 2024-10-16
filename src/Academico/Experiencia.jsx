import React, { useState, useEffect } from 'react';

function Experiencia({url}){
    const[experiencia, setExperiencia] = useState(null);
    
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
                setExperiencia(data.Experiencia); 
            }
        });
    }, []);

    if (!experiencia) {
        return <p className='fs-3'>Carregando...</p>;
    }


    return(

        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <p className="display-4 text-center">{experiencia.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">

                {experiencia.experiencias.map((experiencia, index) => (

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-5" key={experiencia.id || index}> 

                        <div className="card mx-auto" style={{ width: '18rem' }}>

                            <div className="card-body">
                                <h5 className="card-title">{experiencia.nome}</h5>
                                <h6 className="card-subtitle mb-3 text-body-secondary">{experiencia.data}</h6>
                                <p className="card-text">
                                    {experiencia.objetivo}
                                </p>
                            </div>

                        </div>
                    
                    </div>

                ))}

            </div>

        </div>
   
    );
}

export default Experiencia;