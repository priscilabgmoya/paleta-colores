import { Button, Card, Form } from "react-bootstrap";
import "./Cards.css";
import { useState } from "react";
function Cards(props) {
    const [color, setColor] = useState({id: null ,color: '' , namecolor: ''}); 
    const changeInputs = (event) =>{
        setColor({...color, [event.target.name]: event.target.value})
    }
    const addColors = (event) => {
        event.preventDefault();
        props.addcolors(color); 
        event.target.reset();
    }
  return (
    <Card className= {props.isList ? 'card-pequeña' : 'card-grande'}>
      <Card.Header>
        <h3 className={props.isList ? "title-list" : "title-admin"}>{props.isList ? props.colorHook.namecolor : props.title }</h3>
      </Card.Header>
      <Card.Body  className={props.isList ? "body-card-pequeña" : "body-card-grande"}>
        <Form onSubmit={addColors}>
          <Form.Group className={props.isList ? "contener-inputs-pequeños":"contener-inputs-grandes"}>
            {
                props.isList ?       
                <Form.Control
                type="color"
                name="color"
                id="card-color"
                readOnly
                value={props.colorHook.color}
              ></Form.Control>  : 
              <>
              <Form.Control
              type="color"
              name="color"
              id="card-color"
              onChange={changeInputs}
            ></Form.Control>    
                 <Form.Control
                type="text"
                name="namecolor"
                id="card-name-color"
                placeholder="Ingrese un nombre de color..."
                onChange={changeInputs}
              ></Form.Control>
              </>
            }
          </Form.Group>
          <Card.Footer className={props.isList ? "footer-card-pequeña" : "footer-card-grande"}>
            <Button 
            variant={props.isList ? "danger": "primary"} 
            type={props.isList ? "button":"submit"} 
            onClick={props.isList ? ()=>{props.deletecolors(props.colorHook.id)} : () => {}}
            >
              {props.isList ? "Borrar":"Guardar"}
            </Button>
          </Card.Footer>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Cards;
