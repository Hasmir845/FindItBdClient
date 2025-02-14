import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                
            }
        ]
    }
])

export default Router;