import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import ProjectPage from './components/pages/ProjectPage';

const ReactRouter = () => {
    return (
        <HashRouter basename="/">
            <Route exact path='/' component={HomePage}/>
            <Route path='/projects' component={ProjectPage}/>
        </HashRouter>
    )
}

export default ReactRouter;