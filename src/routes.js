import Home from './components/homepage/HomepageComponent'
import Login from './components/login/LoginComponent'
import Signup from "./components/signup/SignupComponent";

export default [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup}
]