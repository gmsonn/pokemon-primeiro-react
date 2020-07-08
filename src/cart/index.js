import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as S from './styled';
function Cart(){

    const [drop, setDrop ] = useState(false);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();

    
    function updateCart(){
        let getCart = JSON.parse(localStorage.getItem('cart'));
        getCart ? getCart = getCart : getCart = [{vazio: true}]
        setCart(getCart)

    }

    function updateTotal(){
        let total = cart.map(item => item.preco * item.quantidade).reduce((ant, prox) => ant + prox, 0);
        if(isNaN(total)){
            total = 0;
        }
        setTotal(total);
    }

    function handleDrop(){
        setDrop(!drop);
        updateCart();
        updateTotal();
     }

     useEffect(() => {
        updateCart();
        updateTotal();
     }, [localStorage.getItem('cart')])    


     function handleFechar(){
        setDrop(!drop);
        updateCart();
        localStorage.removeItem('cart');
        alert("Obrigado pela compra... não deu tempo para o modal =(");
     }
    

    return(
        <>

        <S.CartButton onClick={handleDrop}>
            <svg height="20px" viewBox="-35 0 512 512.00102" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"/></svg>
            <span>{cart.length}</span>
            Meu Carrinho
            
        </S.CartButton>

        <S.Lista style={drop ? {display: "block"} : {display: "none"}}>
                    {
                        cart.map((item)=> {
                            if(item.vazio){
                                return(
                                <S.Desc>Seu carrinho está vazio</S.Desc>
                                )
                            }else{
                                return(
                                    <>
                                    <S.ListaItem>
                                        <S.FotoItem>
                                            <img src={item.foto}/>
                                        </S.FotoItem>
                                        
                                        <S.DadosItem>
                                            <S.ItemTitulo>{item.nome}</S.ItemTitulo>
                                            <S.Desc>Preço: R$ {item.preco},00</S.Desc>
                                            <S.Desc>Quantidade: {item.quantidade}</S.Desc>
                                        </S.DadosItem>
                                    </S.ListaItem>
                                    </>
                                )
                            }
                        })
                    }
                    <S.ListaItem>
                        <S.Desc>Total: R$ {total},00</S.Desc>
                    </S.ListaItem>
                    <S.FecharCompra onClick={handleFechar}>Fechar Pedido</S.FecharCompra>
        </S.Lista>            
        </>
    );
}

export default Cart;