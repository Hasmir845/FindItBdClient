import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Components/ErrorPage';
import HomeLayOut from '../Layouts/HomeLayOut';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                path:'/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Router;