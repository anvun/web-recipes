import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { accounRoutes, privateRoutes, publicRoutes } from '../Routes';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index';

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth)

    return user ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            {accounRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={'/all-recipes'} />
        </Switch>
    )
    : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            {accounRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
            )}
            <Redirect to={'/login'} />
        </Switch>
    )
}

export default AppRouter;