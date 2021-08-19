import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import ProfileCard from "../../Components/ProfileCard";
import "./style.css"

const ProfilePage = () => {
	return (
		<>
			<AsideMenu />
			<Window>
                <ProfileCard></ProfileCard>
            </Window>
		</>
	);
};

export default ProfilePage;
