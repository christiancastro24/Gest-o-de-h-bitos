import ProfileContainer from "./style";
import { useUserData } from "../../Providers/UserData";
import { useState } from "react";
import PinkButton from "../PinkButton";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import MessageBalloon from "../MessageBalloon";
import api from "../../Services";

const ProfileCard = () => {
    
    const { userName, userEmail, userId, password, token } = useUserData();

    const [changingProfile, setChangingProfile] = useState(false);

    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário inválido"),
        email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
        // password: yup.string().min(6, "Mínimo 6 caracteres").required("Senha inválida")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSub = (data) => {
        console.log("teste")
        console.log(data)
        console.log(userId);
        api.patch(`/users/${userId}/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <>
        <ProfileContainer >
            <form className = "profile_card" onSubmit = {handleSubmit(onSub)} noValidate>
                <input id = "teste" defaultValue = {userName}  type = "text" disabled = {changingProfile? "" : "true"} {...register("username")} 
                />
                {changingProfile && errors.username && <MessageBalloon className = "invalid_username_message" message = {errors.username.message} />}
                <input defaultValue = {userEmail} disabled = {changingProfile? "" : "true"} {...register("email")} 
                />
                
                {changingProfile && errors.email && <MessageBalloon className = "invalid_email_message" message = {errors.email.message} />}
                {/* <input defaultValue = {password} disabled = {changingProfile? "" : "true"} {...register("password")}  */}
                {/* /> */}
                {/* {changingProfile && errors.password && <MessageBalloon className = "invalid_password_message" message = {errors.password.message} />} */}
                <PinkButton type = "submit" text = {changingProfile? "Salvar" : "Alterar"} onClick = {() => setChangingProfile(!changingProfile)}/>
            </form>
        
            <div className = "profile_footer">
                <button >Excluir Conta</button>
            </div>
        </ProfileContainer>
        </>
    )
}

export default ProfileCard;