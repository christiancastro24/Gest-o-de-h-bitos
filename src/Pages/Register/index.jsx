import { Container, Background, Content, ContainerForm } from "./styles";
import RegisterForm from "../../Components/RegisterForm"

const RegisterPage = () => {
  return (
    <Container>
      <Background />
      <Content>
          <RegisterForm />
      </Content>
    </Container>
  );
};

export default RegisterPage;
