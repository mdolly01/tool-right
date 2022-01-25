import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Account from './Account';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToolTycoon from './ToolTycoon';
import { LogInPage } from './LogInPage';
import { SignUpPage } from './SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { UserInfoPage } from './UserInfoPage';


function App() {
  return (
    //BEM

    <div className="app">
      <Router>
      
        <Header />
        
        <Switch>
          <PrivateRoute path="/" exact>
            <UserInfoPage />
          </PrivateRoute>
          <Route path="/login">
            <LogInPage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/tooltycoon">
            <ToolTycoon />
          </Route>
          <Route path="/account">
            <Account />
          </Route>

          <Route path="/search">
          <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
     
      </ Router>
     
    </div>
  );
}

export default App;
