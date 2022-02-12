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
import { PleaseVerifyEmailPage } from './PleaseVerifyEmailPage'
import { EmailVerificationLandingPage } from './EmailVerificationLandingPage';
import { ForgotPasswordPage } from './ForgotPasswordPage';
import { PasswordResetLandingPage } from './PasswordResetLandingPage';

function App() {
  return (
    //BEM

    <div className="app">
      <Router>
      
        <Header />
        
        <Switch>
          <PrivateRoute path="/UserInfoPage" exact>
            <UserInfoPage />
          </PrivateRoute>
          <Route path="/verify-email/:verificationString">
            <EmailVerificationLandingPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/login">
            <LogInPage />
          </Route>
          <Route path='/reset-password/:passwordReset'>
            <PasswordResetLandingPage />
          </Route>
          <Route path="/please-verify">
            <PleaseVerifyEmailPage />
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

          <Route path="/toolright">
            <Home />
          </Route>

        </Switch>
        <Footer />
     
      </ Router>
     
    </div>
  );
}

export default App;
