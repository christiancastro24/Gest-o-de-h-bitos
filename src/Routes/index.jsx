import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home"
import LoginPage from "../Pages/Login"
import AsideMenu from "../Components/AsideMenu"
import PageNotFound from "../Pages/PageNotFound"

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/loginPage">
                <LoginPage />
            </Route>
            <Route path="/teste">
                <AsideMenu />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
     );
}
 
export default Routes;