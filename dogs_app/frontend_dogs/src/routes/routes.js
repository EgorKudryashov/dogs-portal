import PublicPage from "../pages/PublicPage";
import CommunityPage from "../pages/CommunityPage";
import MainPage from "../pages/MainPage";
import JoinPage from "../pages/JoinPage";
import BreedPage from "../pages/BreedPage";
import ProfilePage from "../pages/ProfilePage";


export const MyRoutes =[
    {path: '/', component: MainPage, exact: true, key: 1},
    {path: '/public', component: PublicPage, exact: true , key: 2},
    {path: '/community', component: CommunityPage, exact: true, key: 3},
    {path: '/join', component: JoinPage, exact: true, key: 4},
    {path: '/public/breed/:id', component: BreedPage, exact: true, key: 5},
    {path: '/ProfilePage/:id', component: ProfilePage, exact: true, key: 6}
]