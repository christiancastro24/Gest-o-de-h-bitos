import { useState } from "react";
import {
	Container,
	SubContainer,
	Header,
	Logo,
	Avatar,
	UserName,
	Menu,
	MenuItem,
	Footer,
	EditHover,
	MultiFrameContainer,
	BurguerMenu,
} from "./style";
import "antd/dist/antd.css";
import AvatarSelector from "./AvatarSelector";
import {
	MeetingRoom,
	Edit,
	Menu as Burguer,
	ExpandLess,
} from "@material-ui/icons";
import { useHistory } from "react-router";

const getRandom = (max, min = 0) => {
	return Math.round(Math.random() * (max - min) + min);
};


const AsideMenu = () => {
    const [open, setOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [avatarId, setAvatarId] = useState(localStorage.getItem('userAvatarId') || getRandom(20));
    const [avatarType, setAvatarType] = useState(localStorage.getItem('userAvatarType') || getRandom(5,2));
    const currentPath = window.location.pathname;
    const history = useHistory();

    const getUserAvatar = () => {
        return `https://robohash.org/${avatarId}.png?set=set${avatarType}`;
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
    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }
    
    return (
		<Container>
			<Logo>
				<span style={{ color: "var(--pink)" }}>D</span>evHealth
				<span style={{ color: "var(--lightGreen)" }}>y</span>
			</Logo>
			<BurguerMenu onClick={handleShowMenu}>
				{showMenu ? <ExpandLess /> : <Burguer />}
			</BurguerMenu>
			<SubContainer>
				<Header>
					<MultiFrameContainer>
						<Avatar
							src={getUserAvatar()}
							alt="UserAvatar"
							onClick={handleOpen}
						></Avatar>
						<EditHover onClick={handleOpen}>
							<Edit />
						</EditHover>
					</MultiFrameContainer>
					<AvatarSelector
						open={open}
						handleClose={handleClose}
						handleChangeAvatarId={handleChangeAvatarId}
					/>

					<UserName>Jorgesp88</UserName>
				</Header>
				<Menu show={showMenu}>
					<MenuItem
						foq={currentPath === "/habits"}
						onClick={() => history.push("/habits")}
					>
						<b />
						<b />
						Hábitos
					</MenuItem>
					<MenuItem
						foq={currentPath === "/groups"}
						onClick={() => history.push("/groups")}
					>
						<b />
						<b />
						Grupos
					</MenuItem>
					<MenuItem
						foq={currentPath === "/profile"}
						onClick={() => history.push("/profile")}
					>
						<b />
						<b />
						Profile
					</MenuItem>
				</Menu>
				<Footer>
					Deslogar{" "}
					<MeetingRoom style={{ transform: "translateY(25%)" }} />{" "}
				</Footer>
			</SubContainer>
		</Container>
	);
}
 
export default AsideMenu;