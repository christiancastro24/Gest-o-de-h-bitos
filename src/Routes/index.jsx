import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/Register";

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path = "/registerPage">
                <RegisterPage />
            </Route>
        </Switch>
    );
}

export default Routes;