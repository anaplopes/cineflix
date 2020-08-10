import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import { Link, useHistory } from 'react-router-dom';
import categoriasRepository from '../../../repositories/categorias';


function CadastroCategoria() {
  const history = useHistory()
  const { handleChange, values} = useForm({
    titulo: '',
    descricao: '',
    cor: '',
  });

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Categoria cadastada com sucesso');

        setCategorias([...categorias, values]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/cadastro/video');
          });
      }}
      >

        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
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
          <Link to="/cadastro/video">
            <Button renderAs="button">Voltar</Button>
          </Link>

          <Button type='submit' style={{background: '#00C86F', color: 'white'}}>Cadastrar</Button>
        </div>
      </form>

      {categorias.length === 0 && (
        <div></div>
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
