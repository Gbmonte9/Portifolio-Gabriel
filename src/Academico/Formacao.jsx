import React, { useState, useEffect } from 'react';

function Formacao({url}){
    const[formacao, setFormacao] = useState(null);
    
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
                setFormacao(data.Formacao); 
            }
        });
    }, []);

    if (!formacao) {
        return <p className='fs-3'>Carregando...</p>;
    }


    return(

        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <p className="display-4 text-center">{formacao.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">
                {formacao.formacoes.map((formacao, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-5" key={formacao.id || index}> 
                        <div className="card mx-auto" style={{ width: '18rem' }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">{formacao.nomeDaEscola}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{formacao.nomeDaFormacao}</h6>
                                <p className="card-text">
                                    {formacao.descricaoDaEscola}
                                </p>
                                <a href={formacao.linkDaEscola} target="_blank" rel="noopener noreferrer" className="card-link">Link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
   
    );
}

export default Formacao;