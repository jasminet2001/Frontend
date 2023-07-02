import dashboard from "@/pages/userpanel/dashboard-page";
import Home from "@/pages/homepage/home-page";
import aboutUs from "@/pages/about/about-page";
import Login from "@/pages/login/login-page";
import Signup from "@/pages/signup/signup-page";
import Search from "@/pages/search/search-page";
import companyOverview from "@/pages/companyOverview/companyOverview-page";

export default [
    {path: '/', component: Home},
    {path: '/about', component: aboutUs},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/search', component: Search},
    {path: '/c/:id', component: companyOverview},
    {path: '/user/dashboard', component: dashboard},
]