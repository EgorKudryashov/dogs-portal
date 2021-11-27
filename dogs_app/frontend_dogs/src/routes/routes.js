import PublicPage from "../pages/PublicPage";
import CommunityPage from "../pages/CommunityPage";
import MainPage from "../pages/MainPage";


export const MyRoutes =[
    {path: '/', component: MainPage, exact: true, key: 1},
    {path: '/public', component: PublicPage, exact: true , key: 2},
    {path: '/community', component: CommunityPage, exact: true, key: 3},
]