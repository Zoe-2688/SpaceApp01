import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagen from "./Imagen";


const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Galeria = ({ fotos = [], setTag, fotoSelecionada, alAlternarFavorito }) => {
  return (
      <>
          <Tags setTag={setTag} />
          <GaleriaContainer>
              <SeccionFluida>
                  <Titulo>Navega por la galería</Titulo>
                  <ImagenesContainer>
                      {fotos.map(foto => <Imagen foto={foto} key={foto.id} alSolicitarZoom={fotoSelecionada} alAlternarFavorito={alAlternarFavorito} />)}
                  </ImagenesContainer>
              </SeccionFluida>
              <Populares />
          </GaleriaContainer>
      </>
  )
}

export default Galeria
