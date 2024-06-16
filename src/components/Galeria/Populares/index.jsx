import styled from 'styled-components';
import Titulo from '../../Titulo';
import fotos from './fotos-populares.json'

const Section = styled.section`
    padding: 16px;
    text-align: center;
`;

const ColumnaFotos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center; /* Center align items for better aesthetics */
    margin-left: 10px
`;

const Imagen = styled.img`
    width: 100%;
    max-width: 212px;
    border-radius: 20px;
    object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    max-width: 300px; /* Set a max-width to avoid stretching on large screens */
    margin-top: 16px;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effects */

    &:hover {
        background-color: #C98CF1;
        color: #000;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(201, 140, 241, 0.5); /* Focus indicator for accessibility */
    }
`;

const Populares = () => {
    return (
        <Section aria-label="Populares"> {/* Add aria-label for accessibility */}
            <Titulo $align='center'>Populares</Titulo>
            <ColumnaFotos>
                {fotos.map(foto => (
                    <Imagen key={foto.id} src={foto.path} alt={foto.alt} />
                ))}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </Section>
    );
};

export default Populares;