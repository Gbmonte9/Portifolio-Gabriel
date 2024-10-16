import React, { useState, useEffect } from 'react';

function  Pessoa({url}){
    const[pessoa, setPessoa] = useState(null);
    
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
                setPessoa(data.Pessoa);
            }
        });
    }, []);

    if (!pessoa) {
        return <p className='fs-3'>Carregando...</p>;
    }

    return(

        <div className="container text-center">

            <div className="row justify-content-center ">

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <img src={pessoa.img} className="rounded rounded-circle" alt={pessoa.nome} draggable="false" />
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4 ">
                    <p className="display-3 text-start ">{pessoa.nome}</p>
                    <p className="fs-3 text-start">{pessoa.email}</p>
                    <p className="fs-3 text-start">{pessoa.telefone}</p>
                    <p className="fs-3 text-start">{pessoa.civil} - {pessoa.idade}</p>
                    
                    
                    <div className="row justify-content-start">
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 text-start">
                            <button type="button" className="btn btn-primary text-start">
                                <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    LinkedIn
                                </a>
                            </button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 text-start">
                            <button type="button" className="btn btn-dark">
                                <a href={pessoa.github} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                    GitHub
                                </a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Pessoa;