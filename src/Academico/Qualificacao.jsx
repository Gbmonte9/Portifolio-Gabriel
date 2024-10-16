import React, { useState, useEffect } from 'react';

function Qualificacao(url){
    const[qualificacao, setQualificacao] = useState(null);
    
    async function getJson({url}) {
    
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
                setQualificacao(data.Qualificacao); 
            }
        });
    }, []);

    if (!qualificacao) {
        return <p className='fs-3'>Carregando...</p>;
    }

    return(
        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4"> 
                    <p className="display-4 text-center">{qualificacao.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">

            {qualificacao.linguagens.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-5" key={item.id || index}>
                    <div className="card mx-auto" style={{ width: '18rem' }}>
                        <img src={item.imagem} className="card-img-top" alt={item.nome} draggable="false" />
                        <div className="card-body">
                            <p className="card-text">{item.nome}</p>
                        </div>
                    </div>
                </div>
            ))}

            </div>

        </div>
    );
}

export default Qualificacao;