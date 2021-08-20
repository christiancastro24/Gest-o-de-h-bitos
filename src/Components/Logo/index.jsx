import LogoContainer from "./style";
import { useHistory } from "react-router-dom";

const Logo = () => {
	const history = useHistory();
	return (
		<LogoContainer onClick={() => history.push("/")}>
			<span className="logo_d">D</span>evHealth
			<span className="logo_y">y</span>
		</LogoContainer>
	);
};

export default Logo;
