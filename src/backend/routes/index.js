import { signUpRoute } from './signUpRoute';
import { testRoute } from "./testRoute";
import { logInRoute } from "./logInRoute"
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute';
// import { testEmailRoute } from './testEmailRoute';


export const routes = [
    getGoogleOauthUrlRoute,
    resetPasswordRoute, 
    forgotPasswordRoute,
    logInRoute,
    signUpRoute,
    // testEmailRoute,
    verifyEmailRoute,
    testRoute,
    updateUserInfoRoute,

];

