import { styled } from "styled-components"
import CampoTexto from "./CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 50px 20px; /* Añadí un poco de padding a los lados */
    display: flex;
    justify-content: space-between; /* Coloca los elementos en los extremos */
    align-items: center; /* Centra verticalmente los elementos */
`;

const Logo = styled.img`
    width: 15vw;
    margin-left: -45px;
`;

const Cabecera = () => {
    return (
        <HeaderEstilizado>
            <Logo src="img/logo.png" alt="logo de Space App" />
            <CampoTexto />
        </HeaderEstilizado>
    );
};

export default Cabecera;