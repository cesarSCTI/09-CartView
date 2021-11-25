import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import './itemlistcontainer.css';
import ItemCount from "../IItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




const items = [
    {id:1, title:'chamarra', category:'invierno', price:50, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:2, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:3, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:4, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:5, title:'chamarra 5', category:'invierno', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:6, title:'chamarra 6', category:'invierno', price:56, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:7, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:8, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:9, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'}
  ];
  

const ItemListContainer = ({getting}) =>{
    const{categoryID} = useParams();
    const [catego, setcatego] = useState([]);
    

    useEffect(() => {
        if(categoryID){
            setcatego(items.filter(res => res.category === categoryID))
        }
        else{
            setcatego(items)
        }
    },[categoryID])

    
    return(
        <>
        <Container fluid className="listContainer">
            <Row>
                <Col>
                    <h3>{getting}</h3>
                </Col>
            </Row>
            
        </Container>
        <Container>
        <Row>
                <Col>
                    <ItemList items={catego}/>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ItemListContainer;