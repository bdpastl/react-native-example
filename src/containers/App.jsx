import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,
  Switch, 
  Route, 
  Link
} from 'react-router-dom'
import MyPage from './MyPage'
import Home from './Home'
import PageWithParameters from './PageWithParams'

const App = () => {
 return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/my-page'>My Page</Link>
          </li>
          <li>
            <Link to='/page-with-parameters'>Page With Parameters</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path='/page-with-parameters/:thing'>
          <PageWithParameters />
        </Route>
        <Route path='/my-page/:someVariable'>
          <MyPage/>
        </Route>
        <Route path='/'> 
          <Home />
        </Route>
      </Switch>


    </div>

  </Router>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App
