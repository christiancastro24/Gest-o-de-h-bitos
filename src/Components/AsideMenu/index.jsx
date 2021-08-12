import { useState } from "react";
import { Container, SubContainer, Header, Logo, Avatar, UserName, Menu, MenuItem, Footer} from "./style";
import "antd/dist/antd.css";
import AvatarSelector from "./AvatarSelector";
import { MeetingRoom } from "@material-ui/icons";


const getRandom = (max, min = 0) => {
	return Math.round(Math.random() * (max - min) + min);
};


const AsideMenu = () => {
    const [wichMenuIsSelected, setWitchMenuIsSelected] = useState(1);
    const [open, setOpen] = useState(false);
    const [avatarId, setAvatarId] = useState(localStorage.getItem('userAvatarId') || getRandom(20));
    const [avatarType, setAvatarType] = useState(localStorage.getItem('userAvatarType') || getRandom(5,2));
    

    const getUserAvatar = () => {
        return `https://robohash.org/${avatarId}.png?set=set${avatarType}`;
    }
    const handleSelect = (menuId) => {
        setWitchMenuIsSelected(menuId)
    }
    const handleChangeAvatarId = (id, type) => {
        setAvatarId(id);
        localStorage.setItem('userAvatarId', id)
        setAvatarType(type)
        localStorage.setItem('userAvatarType', type)
    }
    const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    

    
    return (
		<Container>
            <Logo>
				<span style={{ color: "var(--pink)" }}>D</span>evHealth
				<span style={{ color: "var(--lightGreen)" }}>y</span>
			</Logo>
			<SubContainer>
				<Header>
					<Avatar
						src={getUserAvatar()}
						alt="UserAvatar"
						onClick={handleOpen}
					/>
                    <AvatarSelector open={open} handleClose={handleClose} handleChangeAvatarId={handleChangeAvatarId}/>
					
					<UserName>Jorgesp88</UserName>
				</Header>
				<Menu>
					<MenuItem
						foq={wichMenuIsSelected === 1}
						onClick={() => handleSelect(1)}
					>
						<b />
						<b />
						Hábitos
					</MenuItem>
					<MenuItem
						foq={wichMenuIsSelected === 2}
						onClick={() => handleSelect(2)}
					>
						<b />
						<b />
						Grupos
					</MenuItem>
					<MenuItem
						foq={wichMenuIsSelected === 3}
						onClick={() => handleSelect(3)}
					>
						<b />
						<b />
						Profile
					</MenuItem>
				</Menu>
				<Footer>Deslogar <MeetingRoom style={{transform: 'translateY(25%)'}}/> </Footer>
			</SubContainer>
		</Container>
	);
}
 
export default AsideMenu;