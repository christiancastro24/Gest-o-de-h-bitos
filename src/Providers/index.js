import { AutheticationProvider } from './authentication'
import { GroupsProvider } from './groups'
import {UserDataProvider} from './UserData'

const Providers = ({ children }) => {
    return (
			<GroupsProvider>
				<AutheticationProvider>
					<UserDataProvider>{children}</UserDataProvider>
				</AutheticationProvider>
			</GroupsProvider>
	);
}
export default Providers;