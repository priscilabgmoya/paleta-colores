import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import Cards from './components/Cards/Cards';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [colors , setColors] = useState([]); 

  const addColors = (color) =>{
    if(color.namecolor == "") return alert ("Error: No esta Ingresando el nombre del color! "); 
    color.id = uuidv4(); 
    setColors([...colors, color]);
  }
  const deleteColor = (id) =>{
    if(confirm('¿Desea Eliminar el color seleccionado?')){
    const newColors = colors.filter(color => color.id !== id); 
    setColors(newColors); 
    }
  }
  return (
    <>
      <div className="container"  >
        <Row className='cardAdministrador'>
          <Cards addcolors ={addColors}  isList={false}  title='Administrador Color'/>
        </Row>
        <Row className='contenedor-card'> 
        {
          colors.map((color) => {
            return (
              <Col key={color.id}>
                <Cards isList={true}  colorHook ={color}  deletecolors={deleteColor} />
              </Col>
            )
          })
        }
        </Row>
      </div>
    </>
  )
}

export default App;
