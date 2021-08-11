import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/registerPage">
                {/* <Register /> */}
            </Route>

            <Route path="/loginPage">
                <LoginPage />
            </Route>
        </Switch>
     );
}
 
export default Routes;