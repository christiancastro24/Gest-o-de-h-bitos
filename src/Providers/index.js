import { AutheticationProvider } from './authentication'
import { GroupsProvider } from './groups'

const Providers = ({ children }) => {
    return ( 
        <AutheticationProvider>
            <GroupsProvider>
                {children}
            </GroupsProvider>
        </AutheticationProvider>
     );
}
 
export default Providers;