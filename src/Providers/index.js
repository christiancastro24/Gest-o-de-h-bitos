import { AutheticationProvider } from "./authentication";
import { GroupsProvider } from "./groups";
import { UserDataProvider } from "./UserData";

const Providers = ({ children }) => {
	return (
		<AutheticationProvider>
			<UserDataProvider>
				<GroupsProvider>{children}</GroupsProvider>
			</UserDataProvider>
		</AutheticationProvider>
	);
};
export default Providers;
