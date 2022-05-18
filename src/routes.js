import Home from './components/homepage/HomepageComponent'
import Login from './components/login/LoginComponent'
import Signup from "./components/signup/SignupComponent";
import dashboard from "./components/userpanel/UserDashboard"
import Search from "./components/Search/SearchComponent";
export default [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/dashboard', component: dashboard},
    {path: '/search', component: Search}
]