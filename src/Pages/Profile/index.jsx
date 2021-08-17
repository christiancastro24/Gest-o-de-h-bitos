import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import ProfileCard from "../../Components/ProfileCard";

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
