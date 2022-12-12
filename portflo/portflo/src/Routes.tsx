import React from 'react';
import { Routes as BrowserRoutes, Route } from 'react-router-dom';
import Page from './pages/Page';
import Post from './pages/Post';


const Routes: React.FC = () => (
    <BrowserRoutes>
        <Route path="/">
            <Route path="" element={<Page />} />
            <Route path=":page">
                <Route path="" element={<Page />} />
                <Route path="post/:post" element={<Post />} />
            </Route>
            <Route path="post/:post" element={<Post />} />
        </Route>

    </BrowserRoutes>
);

export default Routes;