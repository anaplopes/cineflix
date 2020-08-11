import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';


function CadastroVideo() {
  const history = useHistory()
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values} = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Videos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            alert('Video cadastrado com sucesso!')
            history.push('/');
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
          label="Url"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <div>
          <Link to="/cadastro/categoria">
            <Button renderAs="button">Cadastrar Categoria</Button>
          </Link>

          <Button type='submit' style={{background: '#00C86F', color: 'white'}}>Cadastrar</Button>
        </div>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
