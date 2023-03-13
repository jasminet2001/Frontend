import Home from './components/homepage/HomepageComponent'
import Login from './components/login/LoginComponent'
import Signup from "./components/signup/SignupComponent";
import Search from "./components/Search/SearchComponent";

import userpanel from "./components/userpanel/UserDashboard.vue";
import editProfile from "./components/userpanel/EditProfile.vue"
import submitAds from "./components/userpanel/submitAd.vue"
import AdsList from "./components/userpanel/AdsList.vue"
import userUpgrade from "./components/userpanel/userUpgrade.vue"
import ChangePass from "./components/userpanel/ChangePass";
import Payment from "./components/userpanel/PaymentPageComponent.vue";
import StarredAds from "./components/userpanel/StarredAdsPageComponent.vue";
import adOverview from "./components/adOverview/adOverview";
import companyOverview from "./components/companyOverview/companyOverview.vue";
import aboutUs from "@/components/aboutUs/aboutComponent";

//company panel routes
import EditCompanyProfile from "./components/companyPanel/EditCompanyProfile.vue";
import CompanySubAd from "./components/companyPanel/CompanySubmitAd.vue";
import ChangeCPass from "./components/companyPanel/ChangeCompanyPass.vue";
import CompanyAdsList from "./components/companyPanel/CompanyAdsList.vue";
import CompanyDashboard from "./components/companyPanel/CompanyDashboard";
import SentReq from "./components/companyPanel/SentRequests.vue";
import RecReq from "./components/companyPanel/RecievedRequests.vue";
import CompanyPay from "./components/companyPanel/PaymentPageComponent.vue";
import CompanyBookmarks from "./components/companyPanel/StarredAdsPageComponent.vue";

export default [
    {path: '/', component: Home},
    {path: '/about', component: aboutUs},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/search', component: Search},
    {path: '/ad/:id', component: adOverview},
    {path: '/user/dashboard', component: userpanel},
    {path: '/user/editprofile', component: editProfile},
    {path: '/user/subads', component: submitAds},
    {path: '/user/MyAdsList', component: AdsList},
    {path: '/user/UserUpgrade', component: userUpgrade},
    {path: '/user/ChangePass', component: ChangePass},
    {path: '/user/Payment', component: Payment},
    {path: '/user/bookmarks', component: StarredAds},
    {path: '/company/editprofile', component: EditCompanyProfile},
    {path: '/company/subad', component: CompanySubAd},
    {path: '/company/changepass', component: ChangeCPass},
    {path: '/company/adslist', component: CompanyAdsList},
    {path: '/company/dashboard', component: CompanyDashboard},
    {path: '/company/sentrequests', component: SentReq},
    {path: '/company/recievedrequests', component: RecReq},
    {path: '/company/payment', component: CompanyPay},
    {path: '/company/bookmarks', component: CompanyBookmarks},
    {path: '/company/:id', component: companyOverview},
]
