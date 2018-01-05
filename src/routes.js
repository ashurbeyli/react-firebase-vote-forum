import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Posts from "./containers/Posts/index";
import AddPost from "./containers/AddPost/index";

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App }>
            <Route path="/posts" component={ Posts }/>
            <Route path="/add-post" component={ AddPost }/>
            <IndexRedirect to="/posts"/>
        </Route>
    </Router>
);

export default Routes;