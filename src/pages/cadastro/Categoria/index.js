import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
 

function CadastroCategoria() {
  const objeto = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(objeto);

  function setValue(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'https://app-comedyflix.herokuapp.com/categorias'; 
      fetch(URL)
       .then(async (respDoServer) =>{
        if(respDoServer.ok) {
          const resposta = await respDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([...categorias, valores]);

        setValue(objeto);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={handleChange}
        />

        <div>
          <Button>Cadastrar</Button>
        </div>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.titulo}${indice}`}>{categoria.titulo}</li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
