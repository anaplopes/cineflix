import config from '../config';


const URL_VIDEOS = `${config.DOMINIO}/videos`;

function create(objeto) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(objeto),
    })
        .then(async (respDoServer) => {
            if(respDoServer.ok) {
                const resposta = await respDoServer.json();
                return resposta; 
            }
            throw new Error('Não foi possível cadastrar os dados');
        });
}

export default {
    create,
};
