import React, { useState, useEffect } from 'react';

function Palestra({url}){
    const[palestra, setPalestra] = useState(null);
    
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
                setPalestra(data.Palestra); 
            }
        });
    }, []);

    if (!palestra) {
        return <p className='fs-3'>Carregando...</p>;
    }

    return(
                    
        <ol className="list-group list-group-numbered">
            {palestra.palestras.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id || index}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.nome}</div>
                        {item.descricao}
                    </div>
                </li>
            ))}
        </ol>
    
    );
}

export default Palestra;