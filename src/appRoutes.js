import { BrowserRouter as Router, Route, Routes, RedirectFunction, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/homePage';
import Detail from './views/detailPage';
import Error from './views/errorPage';

function AppRoutes(){
    const router = createBrowserRouter([
        { path: '/', element: <Home/> , exact: true},
        { path: 'product/:id', element: <Detail/>, exact: true},
        { path: '*', element: <Error/> }
    ])

    return(
        <RouterProvider router={router}/>
    );
}

export default AppRoutes;