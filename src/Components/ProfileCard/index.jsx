import ProfileContainer from "./style";
import { useUserData } from "../../Providers/UserData";
import { useState, useCallback } from "react";
import PinkButton from "../PinkButton";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import MessageBalloon from "../MessageBalloon";
import api from "../../Services";
import ConfirmationPopup from "../ConfirmationPopup";



const ProfileCard = () => {
    
    const { userName, userEmail, userId, password, token } = useUserData();

    const [changingProfile, setChangingProfile] = useState(false);

    const [deletingProfile, setDeletingProfile] = useState(false);

    

    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário inválido"),
        email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
        // password: yup.string().min(6, "Mínimo 6 caracteres").required("Senha inválida")
    });


    const deleteProfile = () => {
        api.delete(`/users/${userId}/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log("apagouuu")
    }

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
        .then(res => {
            console.log(res)
            setChangingProfile(false);
            window.location.reload();
            })
        .catch(error => console.log(error))
    }

    return (
        <>
        <ProfileContainer >
            { deletingProfile && <ConfirmationPopup />}
            <form className = "profile_card" onSubmit = {handleSubmit(onSub)} noValidate>
                <input id = "teste" defaultValue = {userName}  type = "text" disabled = {changingProfile? "" : "true"} {...register("username")} 
                />
                {changingProfile && errors.username && <MessageBalloon className = "invalid_username_message" message = {errors.username.message} />}
                <input defaultValue = {userEmail} disabled = {changingProfile? "" : "true"} {...register("email")} 
                />
                
                {changingProfile && errors.email && <MessageBalloon className = "invalid_email_message" message = {errors.email.message} />}
                
                
                
                {changingProfile? 
                <PinkButton text = "Salvar" type = "submit" onClick = {() => setChangingProfile(true)}/>
                // <button type = "submit" onClick = {() => setChangingProfile(true)} >Salvar</button>
                :
                <PinkButton text = "Alterar" type = "button" onClick = {() => setChangingProfile(true)} />
                // <button type = "button" onClick = {() => setChangingProfile(true)}>Alterar</button>
                }
            </form>
        
            <div className = "profile_footer">
                <button onClick = {() => setDeletingProfile(true)}>Excluir Conta</button>
            </div>
            <div>
       
        </div>
        </ProfileContainer>
        </>
    )
}

export default ProfileCard;