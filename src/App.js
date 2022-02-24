import Home from './pages/Home'
import Productlist from './pages/Productlist'
import Cart from './pages/Cart'
import Goodsitem from './pages/Goodsitem'
import Register from './pages/Register'
import Login from './pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  const user = true

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/products/:category'>
          <Productlist />
        </Route>
        <Route path='/product/:id'>
          <Goodsitem />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
