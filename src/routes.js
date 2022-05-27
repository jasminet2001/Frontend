import Home from './components/homepage/HomepageComponent'
import Login from './components/login/LoginComponent'
import Signup from "./components/signup/SignupComponent";
import dashboard from "./components/userpanel/UserDashboard"
import Search from "./components/Search/SearchComponent";
import Signup from "./components/signup/SignupComponent"
import userpanel from "./components/userpanel/UserDashboard.vue";
import editProfile from "./components/userpanel/EditProfile.vue"
import submitAds from "./components/userpanel/submitAd.vue"
import AdsList from "./components/userpanel/AdsList.vue"
import userUpgrade from "./components/userpanel/userUpgrade.vue"

export default [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/dashboard', component: dashboard},
    {path: '/search', component: Search},
    {path: '/userpanel', component: userpanel},
    {path: '/editprofile', component: editProfile},
    {path: '/subAds', component: submitAds},
    {path: '/MyAdsList', component: AdsList},
    {path: '/UserUpgrade', component: userUpgrade},
]
