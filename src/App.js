import {BrowserRouter, Switch, Route,} from 'react-router-dom'

import './App.css';
import Header from './components/header'
import ProductList from './components/productList'
// import ProductCard from './components/productCard'
import ProductDetail from './components/productDetail'


function App() {
   return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" exact component={ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
