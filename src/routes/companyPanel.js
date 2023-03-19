import EditCompanyProfile from "@/pages/companypanel/editprofile-page";
import CompanySubAd from "@/pages/companypanel/submitad-page";
import ChangeCPass from "@/pages/companypanel/changepass-page";
import CompanyAdsList from "@/pages/companypanel/userads-page";
import CompanyDashboard from "@/pages/companypanel/dashboard-page";
import SentReq from "@/pages/companypanel/sent-requests";
import RecReq from "@/pages/companypanel/recievedrequests-page";
import CompanyPay from "@/pages/companypanel/wallet-page";
import CompanyBookmarks from "@/pages/companypanel/bookmarks-page";

export default [
    {path: '/company/editprofile', component: EditCompanyProfile},
    {path: '/company/subad', component: CompanySubAd},
    {path: '/company/changepass', component: ChangeCPass},
    {path: '/company/adslist', component: CompanyAdsList},
    {path: '/company/dashboard', component: CompanyDashboard},
    {path: '/company/sentrequests', component: SentReq},
    {path: '/company/recievedrequests', component: RecReq},
    {path: '/company/payment', component: CompanyPay},
    {path: '/company/bookmarks', component: CompanyBookmarks},
]