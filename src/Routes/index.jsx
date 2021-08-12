import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import AsideMenu from "../Components/AsideMenu";

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/teste">
                <AsideMenu/>
            </Route>
        </Switch>
     );
}
 
export default Routes;