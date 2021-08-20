import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import ProfileCard from "../../Components/ProfileCard";
import "./style.css";
import { useAuthenticated } from "../../Providers/authentication";
import { useHistory } from "react-router";

const ProfilePage = () => {
	const { authenticated } = useAuthenticated();
	const history = useHistory();

	if (!authenticated) {
		history.push("/loginPage");
	}

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
