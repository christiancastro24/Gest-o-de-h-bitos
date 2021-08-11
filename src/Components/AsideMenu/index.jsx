import { TextField, InputAdornment } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Container, Header, Logo, Avatar, UserName, Menu, MenuItem, Logout } from "./style";
import axios from "axios";

const AsideMenu = () => {
    
    const getAvatars = () => {
        const avatarsQuantity = 10;
        let output = [];
        for (let i = 0; i < avatarsQuantity; i++){
            output.push(`https://robohash.org/${i}.png?set=set3`);
        }
        return output;
    }

    return (
		<Container>
			<h1 style={{ textAlign: "left", alignSelf: "flex-start" }}>
				DevHealthy
			</h1>
			<Header>
				<Avatar src={getAvatars()[1]} alt="UserAvatar" />
                <UserName>joaquim</UserName>
			</Header>
			<Menu>
				<MenuItem>Hábitos</MenuItem>
				<MenuItem>Grupos</MenuItem>
				<MenuItem>Profile</MenuItem>
			</Menu>
			<Logout>Deslogar</Logout>
			
		</Container>
	);
}
 
export default AsideMenu;