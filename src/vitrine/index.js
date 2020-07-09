import React, {useState, useEffect} from 'react';
import api from '../api';
import {
    Card, CardImg, CardText, CardBody, CardTitle, Button, Col, 
} from 'reactstrap';
import NumberFormat from 'react-number-format';


function Vitrine(){

    const [result, setResult ] = useState([]);

    useEffect(() => {

        api.getData().then(response => {
            response.data.results.map((item) =>{
                api.getInfo(item.url).then(info => {
                    result.push(info.data);
                    setResult([...result]);
                })
            })
            
        });
        

    }, []);


    function addToCart(value){
        api.getInfo(`https://pokeapi.co/api/v2/pokemon/${value}`).then((item) => {
            const oldCart = JSON.parse(localStorage.getItem('cart'));
            let pokemonInfo = [];
            oldCart ? pokemonInfo = oldCart : pokemonInfo = [];
            const result = pokemonInfo.findIndex(pokemon => pokemon.nome === value );
            if(!result > 0){
                pokemonInfo[result].quantidade = pokemonInfo[result].quantidade + 1
                console.log(pokemonInfo[result])
            }else{
                pokemonInfo.push({foto: item.data.sprites.front_default, nome: item.data.forms[0].name, preco: item.data.forms[0].name.length*15, quantidade: 1})
            }
            localStorage.setItem('cart', JSON.stringify(pokemonInfo))
        })
    }
 
    
    const pokemons = result.map((item, index) => {

        return (

            <Col md="3" className="mb-3" key={index}>
            <Card>
                <CardImg top src={item.sprites.front_default} />
                <CardBody>
                <CardTitle>{item.forms[0].name}</CardTitle>
                <CardText>
                    <NumberFormat value={(item.forms[0].name.length*15).toFixed()} displayType={'text'} suffix={',00'} thousandSeparator={true} prefix={'R$ '} />     
                    <span style={{display: "block"}}>{item.types.map((tipo, index) => {return(<Button key={index} className="mr-2 mt-2" color="info">{tipo.type.name}</Button>)})}</span>
                </CardText>
                <Button value={item.forms[0].name} color="danger" onClick={e => addToCart(e.target.value)}>Adcionar ao carrinho</Button>
                </CardBody>
            </Card>
            </Col>
        );
      });

    

  
    return(
        <>
            
            {pokemons}
    
        </>
    );
}

export default Vitrine;

