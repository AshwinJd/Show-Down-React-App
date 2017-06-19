// import Base from './components/Base';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignUpForm from './Components/SignUpForm';


const routes = {
  // base component (wrapper for the whole application).
  component: HomePage,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signUp',
      component: SignUpForm
    }

  ]
};

export default routes;
