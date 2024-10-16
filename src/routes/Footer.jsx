import config from '../Json/Footer.json';

function Footer() {
    const gabriel = config.Proprietario;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', config.ConfiguracaoDeData);

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 mx-5">
                    <p className='fs-6'>Propriedades de {gabriel.name}</p>
                    <p className='fs-6'>
                        LinkedIn: <a href={gabriel.linkedin} target="_blank" rel="noopener noreferrer">Perfil no LinkedIn</a>
                    </p>
                    <p className='fs-6'>
                        Email: <a href={`mailto:${gabriel.email}`}>{gabriel.email}</a>
                    </p>
                    <p className='fs-6'>Data: {formattedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;