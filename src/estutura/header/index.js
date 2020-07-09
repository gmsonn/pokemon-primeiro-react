import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Container
  } from 'reactstrap';
  import Cart from '../../cart';

function Header(){
    
      return(
        <>
            <Navbar color="light" light expand="md" fixed="top">
                <Container style={{position: "relative"}}>
                    <NavbarBrand href="/">Pokestore</NavbarBrand>
                    <Cart></Cart>
                </Container>    
            </Navbar>
        </>
    );
    
}

export default Header;