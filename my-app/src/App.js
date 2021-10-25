import React from 'react';
// import firebaseConfig from '../src/utils/firebaseConfig'
import './App.css';
import {
  Switch, Route, BrowserRouter, Redirect,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Tables from './components/Orders';
import Orders from './components/Orders';
import Cocina from './components/Cocina';
import PedidosPorEntregar from './components/Pedidos_Por_Entregar';
import PageNotFound from './components/PageNotFound';
import {ProductsLunch, ProductsBurger} from './components/Lunch';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
        <Route exact path="/order/:id">
          <Header/>
          <ProductsLunch/>
          <ProductsBurger/>
            </Route>
          <Route exact path="/home" component={Home} /> 

          {/* <Route path="/tables"component={Tables}/> */}
          <Route exact path="/order/"component={Orders}>
            <Tables/>
            <ProductsLunch/>
            <ProductsBurger/>
          </Route>
             
          <Route exact path="/kitchen" component={Cocina} />
          <Route exact path="/orders" component={PedidosPorEntregar} />
          <Redirect to="/home" /> 
          <Route component={PageNotFound} />
          
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
