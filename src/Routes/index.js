import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import NotFound from '~/pages/NotFound'

import HeaderOnly from '~/components/Layout/HeaderOnly'

const publicRoutes = [
    {
        path: '/',
        element: Home 
    },
    {
        path: '/following',
        element: Following 
    },
    {
        path: '/profile',
        element: Profile 
    },
    {
        path: '/profile',
        element: Profile 
    },
    {
        path: '/upload',
        element: Upload,
        layout: HeaderOnly
    },
    {
        path: '/search',
        element: Search,
        layout: null
    },
    {
        path: '*',
        element: NotFound,
        layout: null
    }
]
// Su dung trong tinh huong can dang nhap
 const privateRoutes = [

 ] 


 export { publicRoutes, privateRoutes}