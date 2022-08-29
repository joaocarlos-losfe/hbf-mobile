import { View, Image, Text, ActivityIndicator } from "react-native";
import { CustonMainButton } from "../../components/Button";
import { CustonInput } from "../../components/Input";
import { drawPageContext } from "../Draw";
import { styles } from "./styles";

import { useContext, useState } from "react";

import { API } from "../../services/ApiRequest";
import { Colors } from "../../styles/GlobalStyles";

export const LoginPage = ()=>
{
    const {setPageType, setUserData} = useContext(drawPageContext);
    const [msg, setmsg] = useState("");
    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const [whatsappText, setWhatssapText] = useState("");
    const [pass, setPass] = useState("");

    async function handleUserLogin()
    {
        if(whatsappText == "" || pass == "")
        {
            setmsg("alguns campos estão vazio !");
            return;
        }
        
        setLoadingSubmit(true);

        const response = await API.post(`houseburguer/api/user/login/${whatsappText}`, {pass});

        if(!response.data._id)    
            setmsg(response.data.message + " !");
        else
        {
            setUserData(response.data);
            setTimeout(()=>500);
            setPageType('userPage');
        }

        setLoadingSubmit(false);
    }

    return(
        
        <View>
        {
            loadingSubmit ? <ActivityIndicator color={Colors.primary} size="large"/>
            :
            <>
                <CustonInput placeHolderText={"Whatssap"} keyType={'number-pad'} setText={setWhatssapText} />
                <CustonInput  placeHolderText={"Sua senha"} keyType={'visible-password'}  setText={setPass} />
                { msg != "" && <Text style={styles.errorMsg} >{msg}</Text> }
                <View style={styles.center} >
                    <CustonMainButton text={'Entrar'} onClick={async ()=>{ await handleUserLogin()}} />
                </View>
                <Text style={styles.text}>Não possui uma conta? 
                    <Text style={styles.strongText} onPress={()=>{setPageType('CreateAccountPage')}} > Clique aqui para criar</Text>
                </Text>
            </>
        }
        </View>
    
    )
}