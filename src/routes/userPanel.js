import dashboard from "@/pages/userpanel/dashboard-page";
import editProfile from "@/pages/userpanel/editprofile-page";
import submitAds from "@/pages/userpanel/submitAd-page";
import AdsList from "@/pages/userpanel/adList-page";
import userUpgrade from "@/pages/userpanel/upgrade-page";
import ChangePass from "@/pages/userpanel/changepass-page";
import Payment from "@/pages/userpanel/wallet-page";
import StarredAds from "@/pages/userpanel/bookmarks-page";
import userAds from "@/pages/userpanel/userads-page";

export default [
    {path: '/user/dashboard', component: dashboard},
    {path: '/user/editprofile', component: editProfile},
    {path: '/user/subads', component: submitAds},
    {path: '/user/myads', component: AdsList},
    {path: '/user/upgrade', component: userUpgrade},
    {path: '/user/changepass', component: ChangePass},
    {path: '/user/payment', component: Payment},
    {path: '/user/bookmarks', component: StarredAds},
    {path: '/user/ads', component: userAds}
]