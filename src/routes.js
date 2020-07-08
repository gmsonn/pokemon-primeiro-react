import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './home';
import Checkout from './checkout';
import Cart from './cart';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/checkout' component={Checkout} />
            </Switch>                        
        </BrowserRouter>
    );
}

export default Routes;