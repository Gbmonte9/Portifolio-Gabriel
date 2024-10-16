import React, { useState, useEffect } from 'react';

function Profissional({url}){
    const[profissional, setProfissional] = useState(null);
    
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
                    setProfissional(data.Profissional); 
                }
            });
        }, []);

        if (!profissional) {
            return <p className='fs-3'>Carregando...</p>;
        }
    
    return(
        
        <div className="container text-start">
            <div className="row justify-content-start">
                <div className="col-12 mb-4"> 
                    <p className="display-5">{profissional.emprego}</p>
                    <p className='text-break fs-3'>{profissional.objetivo}</p>
                </div>
            </div>
        </div>
    
    );
}

export default Profissional;