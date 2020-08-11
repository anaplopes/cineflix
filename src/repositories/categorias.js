import config from '../config';


const URL_CATEGORIES = `${config.DOMINIO}/categorias`;

async function create(objeto) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
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

async function getAll() {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (respDoServer) => {
        if (respDoServer.ok) {
          const resposta = await respDoServer.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
}

async function getAllWithVideos() {
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
  create,
};
