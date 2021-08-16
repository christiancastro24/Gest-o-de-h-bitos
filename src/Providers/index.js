import { AutheticationProvider } from './authentication'
import { GroupsProvider } from './groups'
import {UserDataProvider} from './UserData'

const Providers = ({ children }) => {
    return (
		<AutheticationProvider>
			<GroupsProvider>
				<UserDataProvider>{children}</UserDataProvider>
			</GroupsProvider>
		</AutheticationProvider>
	);
}
 
export default Providers;