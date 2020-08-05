import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import DOMINIO from '../../../config';


function CadastroCategoria() {
  const objeto = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm} = useForm(objeto);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = `${DOMINIO}/categorias`;
    fetch(URL)
      .then(async (respDoServer) => {
        if(respDoServer.ok) {
          const resposta = await respDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
      })
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([...categorias, values]);

        clearForm();
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
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
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>
    </PageDefault>
  );
}

export default CadastroCategoria;
