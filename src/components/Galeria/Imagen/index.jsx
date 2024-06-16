import styled from "styled-components";
import BotonIcono from "../../GlobalStyles/BarraLateral/BotonIcono";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0 0 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    flex-direction: column; /* Ensure elements inside figcaption align properly */
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Pie = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagen = ({ foto, expandida = false, alSolicitarZoom, alAlternarFavorito }) => {
  const iconoFavorito = foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id ?? "sin-id"}`}>
      <img src={foto.path} alt={foto.alt || "Imagen sin descripción"} />
      <figcaption>
        <h3>{foto.titulo ?? "Sin título"}</h3>
        <Pie>
          <h4>{foto.fuente ?? "Desconocida"}</h4>
          <BotonIcono 
            onClick={() => alAlternarFavorito(foto)} 
            aria-label="Alternar favorito"
            title="Alternar favorito"
          >
            <img src={iconoFavorito} alt={foto.favorita ? "Favorito activo" : "Favorito"} />
          </BotonIcono>
          {!expandida && (
            <BotonIcono 
              onClick={() => alSolicitarZoom(foto)} 
              aria-label="Expandir imagen" 
              title="Expandir imagen"
            >
              <img src="/iconos/expandir.png" alt="Icono de Expandir" />
            </BotonIcono>
          )}
        </Pie>
      </figcaption>
    </Figure>
  );
};

export default Imagen;