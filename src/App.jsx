import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Cabecera from './components/GlobalStyles/Cabecera';
import BarraLateral from './components/GlobalStyles/BarraLateral';
import Banner from './components/Banner/Wrapper';
import bannerImg from './assets/banner.png';
import Galeria from './components/Galeria';
import fotos from './fotos.json';
import ModalZoom from './components/ModalZoom';
import Pie from './components/Pie';

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
  height: auto;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [filtro, setFiltro] = useState('');
  const [tag, setTag] = useState(0); // Inicializa tag como 0 para mostrar todas las fotos
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  useEffect(() => {
    const filtrarFotos = () => {
      const fotosFiltradas = fotos.filter(foto => {
        const filtroPorTag = !tag || foto.tagId === tag;
        const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
        return filtroPorTag && filtroPorTitulo;
      });
      setFotosDeGaleria(fotosFiltradas);
    };

    filtrarFotos();
  }, [filtro, tag]);

  const alAlternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      });
    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      };
    }));
  };

  return (
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera filtro={filtro} setFiltro={setFiltro} />
        <MainContainer>
          <BarraLateral />
          <ContenidoGaleria>
            <Banner
              backgroundImage={bannerImg}
              texto="La galería más completa de fotos del espacio."
            />
            <Galeria
              alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
              fotos={fotosDeGaleria}
              alAlternarFavorito={alAlternarFavorito}
              setTag={setTag} // Pasar setTag a Galeria
            />
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSeleccionada}
        alCerrar={() => setFotoSeleccionada(null)}
        alAlternarFavorito={alAlternarFavorito}
      />
      <Pie />
    </FondoGradiente>
  );
};

export default App;
