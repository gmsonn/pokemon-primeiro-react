import React from 'react';
import Vitrine from '../vitrine';
import Banners from '../banners';
import { Row, Container } from 'reactstrap';


function Home(){        

    return(
        <>

      <Banners></Banners>

        <Container>
            <Row>
               <Vitrine></Vitrine>
               
            </Row>
        </Container>
        </>
    );
}

export default Home;