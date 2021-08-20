import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
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
			<Route exact path="/registerPage">
				<RegisterPage />
			</Route>
			<Route exact path="/loginPage">
				<LoginPage />
			</Route>
			<Route exact path="/habits">
				<HabitsPage />
			</Route>
			<Route exact path="/groups">
				<GroupsPage />
			</Route>
			<Route exact path="/profile">
				<ProfilePage />
			</Route>
			<Route exact path="/myGroups">
				<MyGroups />
			</Route>
			<Route path="*">
				<PageNotFound />
			</Route>
		</Switch>
	);
};

export default Routes;
