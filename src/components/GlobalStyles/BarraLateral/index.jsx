import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"

const ListaEstilizada = styled.ul`
    margin: 0; 
    padding:0;
    list-style:none;
    width: 336px;
`

const BarraLateral = () => {
    return(
    <aside>
        <nav>
            <ListaEstilizada>
                <ItemNavegacion 
                iconoActivo="iconos/HomeActivo.png"
                iconoInactivo = "iconos/HomeInactivo.png" 
                activo={true}>
                 Inicio
                </ItemNavegacion>

                <ItemNavegacion 
                IconoActivo="iconos/Masvistas-activo.png" 
                iconoInactivo = "iconos/Masvistas-inactivo.png" 
                activo={false}>
                 Mas vistas
                </ItemNavegacion>

                <ItemNavegacion 
                IconoActivo="iconos/MasMeGusta-activo.png" 
                iconoInactivo = "iconos/MasMeGusta-inactivo.png" 
                activo={false}>
                 Mas me gusta
                </ItemNavegacion>

                <ItemNavegacion 
                IconoActivo="iconos/Nuevas-activo.png" 
                iconoInactivo = "iconos/Nuevas-inactivo.png" 
                activo={false}>
                 Nuevas
                </ItemNavegacion>

                <ItemNavegacion 
                IconoActivo="iconos/Sorprendeme-activo.png" 
                iconoInactivo = "iconos/Sorprendeme-inactivo.png" 
                activo={false}>
                 Sorprendeme
                </ItemNavegacion>

            </ListaEstilizada>
        </nav>
    </aside>)
}
export  default BarraLateral