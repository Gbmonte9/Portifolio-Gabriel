import React, { useState, useEffect } from 'react';

function Projeto({url}){
    const[projeto, setProjeto] = useState(null);
    
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
                    setProjeto(data.Projeto); 
                }
            });
        }, []);

        if (!projeto) {
            return <p className='fs-3'>Carregando...</p>;
        }

    return(

        <div className="container text-center">

            <div className="row justify-content-center">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <p className="display-4 text-center">{projeto.titulo}</p>
                </div>

            </div>

            <div className="row justify-content-center">

                {projeto.projetos.map((projeto, index) => (

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-5" key={projeto.id || index}>
                        
                        <div className="card mx-auto" style={{ width: '18rem' }}>
                            <img src={projeto.img} className="card-img-top" alt={projeto.nome} draggable="false"/>
                            <div className="card-body">
                                <h5 className="card-title">{projeto.nome}</h5>
                                <p className="card-text">{projeto.descricao}</p>
                                <button type="button" className="btn btn-dark">
                                    <a href={projeto.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                        GitHub
                                    </a>
                                </button>
                            </div>
                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Projeto;