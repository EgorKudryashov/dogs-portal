import MainPage from "../pages/mainPage";
import CommunityPage from "../pages/communityPage";


export const MyRoutes =[
    {path: '/main', component: MainPage, exact: true , key: 1},
    {path: '/main/community', component: CommunityPage, exact: true, key: 2},
]