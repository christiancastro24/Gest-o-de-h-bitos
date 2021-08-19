import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home"
import LoginPage from "../Pages/Login"
import PageNotFound from "../Pages/PageNotFound"
import RegisterPage from "../Pages/Register";
import GroupsPage from "../Pages/Grupos";
import HabitsPage from "../Pages/Habitos";
import ProfilePage from "../Pages/Profile";
import MyGroups from "../Pages/MeusGrupos";

const Routes = () => {
    return (
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route path="/registerPage">
				<RegisterPage />
			</Route>
			<Route path="/loginPage">
				<LoginPage />
			</Route>
			<Route path="/habits">
				<HabitsPage />
			</Route>
			<Route path="/groups">
				<GroupsPage />
			</Route>
			<Route path="/profile">
				<ProfilePage />
			</Route>
			{/* <Route path="/teste">
				 <CreateGroup />
				<MessageBalloon />
			</Route>  */}
			<Route path="/myGroups">
				<MyGroups />
			</Route>
			<Route path="*">
				<PageNotFound />
			</Route>
		</Switch>
	);
}

export default Routes;