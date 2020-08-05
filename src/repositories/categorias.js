import config from '../config';


const URL_CATEGORIES = `${config.DOMINIO}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (respDoServer) => {
        if (respDoServer.ok) {
          const resposta = await respDoServer.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respDoServer) => {
            if(respDoServer.ok) {
                const resposta = await respDoServer.json();
                return resposta; 
            }
            throw new Error('Não foi possível pegar os dados');
        });
}

export default {
  getAll,
  getAllWithVideos,
};
