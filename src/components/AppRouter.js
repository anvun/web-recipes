import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import { accounRoutes, privateRoutes, publicRoutes } from '../Routes';

const AppRouter = () => {
    const user = true;

    return user ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            {accounRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={'/all-recipes'} />
        </Switch>
    )
    : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            {accounRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true}/>
            )}
            <Redirect to={'/login'} />
        </Switch>
    )
}

export default AppRouter;