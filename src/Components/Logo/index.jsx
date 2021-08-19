import LogoContainer from "./style"

const Logo = ({onClick}) => {
    return (
        <LogoContainer onClick = {onClick}>
            <span className = "logo_d">D</span>evHealth<span className = "logo_y">y</span>
        </LogoContainer>
    )
}

export default Logo;