import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { NotFound } from './components/NotFound'
import { AddProducts } from './components/AddProducts'
import { Cart } from './components/Cart'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route path = "/signup" component ={Signup}/>
        <Route path = "/login" component ={Login}/>
        <Route path = "/add" component ={AddProducts}/>
        <Route path="/cart" component={Cart}/> 
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
