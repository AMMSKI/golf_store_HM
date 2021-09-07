import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Brands from './components/Brands';
import Products from './components/Products';
import EditBrandForm from './components/EditBrandForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/brands' component={Brands}/>
        <Route exact path="/brands/:id" component={EditBrandForm} />
        <Route exact path='/brands/:brand_id/products' component={Products}/>
      </Switch>
    </div>
  );
}

export default App;

