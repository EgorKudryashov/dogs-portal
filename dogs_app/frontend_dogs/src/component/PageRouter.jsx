import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {MyRoutes} from "../routes/routes";

const PageRouter = () => {

    return (
        <Switch>
            {MyRoutes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key = {route.key}
                />
            )}
            <Redirect to="/"/>
        </Switch>

    );
};

export default PageRouter;