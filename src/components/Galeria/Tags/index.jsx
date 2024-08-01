import React from 'react';
import styled from 'styled-components';
import tags from './tags.json'; // Asegúrate de la ruta correcta

const BarraTags = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TituloTags = styled.p`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #FFFFFF;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  border-color: transparent;
  &:hover {
    border-color: #C98CF1;
  }
`;

const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tags = ({ setTag }) => {
  // Maneja el cambio de tag
  const handleTagChange = (nuevoTag) => {
    console.log("Tag seleccionado:", nuevoTag);
    setTag(nuevoTag); // Actualiza el tag en el estado del componente padre
  };

  return (
    <BarraTags>
      <TituloTags>Buscar por etiquetas:</TituloTags>
      <Div>
        {tags.map(tag => (
          <Tag key={tag.id} onClick={() => handleTagChange(tag.id)}>
            {tag.titulo}
          </Tag>
        ))}
        <Tag key="all" onClick={() => handleTagChange(0)}>
          Mostrar Todas
        </Tag>
      </Div>
    </BarraTags>
  );
};

export default Tags;
