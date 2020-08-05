import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';


function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDados(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  
  return (
    <PageDefault paddingAll={0}>

      {dados.length === 0 && (<div>Loading...</div>)}

      {dados.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dados[0].videos[0].titulo}
                url={dados[0].videos[0].url}
                videoDescription={dados[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dados[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
