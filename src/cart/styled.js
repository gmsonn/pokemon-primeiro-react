import styled from 'styled-components';


export const FecharCompra = styled.button`
    background-color: #17a2b8;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    color: #fff;
    border: 0;
    border-radius:5px;
    margin-top: 10px;
`;

export const CartButton = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    font-weight:bold;
    color: #17a2b8;
    cursor: pointer;
    svg{
        margin-right:5px;
        fill: #c82333;
    }
    span{
        position: absolute;
        background-color: #c82333;
        padding:5px;
        color: #fff;
        width:15px;
        height:15px;
        font-size:10px;
        border-radius:100%;
        padding-top:0;
        padding-left:4.5px;
        margin-left:-35px;
        margin-top:-5px

    }
`;

export const Lista = styled.ul`
    position: absolute;
    right:0;
    top:40px;
    z-index: 9;
    background-color: #f8f9fa;
    padding:20px;
`;

export const ListaItem = styled.li`
    list-style-type: none;
    border-bottom: 1px solid #ccc;
    padding:10px 0;
    display:flex
    
`;

export const FotoItem = styled.div`
`;

export const DadosItem = styled.div`
    
`;


export const ItemTitulo = styled.h2`
    text-transform: capitalize;
    font-size: 18px;
    color: #dc3545;
    font-weight: bold;
`;

export const Desc = styled.p`
    font-weight:bold;
    margin:0;
    padding:0;
    font-size:12px;
    color:#666;
`;


