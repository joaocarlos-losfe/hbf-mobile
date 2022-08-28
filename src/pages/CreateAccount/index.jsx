import { View, Text, ActivityIndicator, Alert } from "react-native"
import { CustonMainButton } from "../../components/Button"
import { CustonInput } from "../../components/Input"
import { CustonSecondaryButton } from "../../components/SecondaryButton"
import { styles } from "./styles"

import { drawPageContext } from "../Draw"
import React, { useContext, useState } from "react"
import { Colors } from "../../styles/GlobalStyles"

import { API } from "../../services/ApiRequest";

export const CreateAccountPage = ()=>
{
    const {setPageType} = React.useContext(drawPageContext);
    
    const [whatsappText, setWhatssapText] = useState("");
    const [city, setCity] = useState("");
    const [referencyPoint, setReferency] = useState("");
    const [pass, setPass] = useState("");

    const [invalidTextData, setInvalidTextData] = useState("");

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    async function reviewAndSetData()
    {
        setInvalidTextData("");
        setLoadingSubmit(true);

        if( whatsappText == "" || city == "" || referencyPoint == "" || pass == "" )
            setInvalidTextData("alguns ou mais campos estão vazios !");
        else
        {
            try
            {
                const response = await API.put(`houseburguer/api/user/userRegister/${whatsappText}`,
                {
                    city, referencyPoint, pass
                });

                if(response.data.user)
                {
                    Alert.alert('Conta criada com sucesso ✔');
                    setPageType('login');
                }
                else
                    setInvalidTextData(response.data.message + '. Verifique seu pré cadastro com a hamburgueria');
                
            }
            catch (error)
            {
                console.log(error);
                
            }
        }

        setLoadingSubmit(false);
    }

    return (
    
        <View>
            <CustonInput keyType={'phone-pad'} placeHolderText={'Whatssap'} setText={setWhatssapText} />
            <CustonInput placeHolderText={'Cidade ou Bairro'} setText={setCity}/>
            <CustonInput placeHolderText={'Rua ou Ponto de referencia'} setText={setReferency}/>
            <CustonInput placeHolderText={'Senha de acesso'} setText={setPass}/>

            { invalidTextData != "" && <Text style={styles.errorMsg} >{invalidTextData}</Text> }

            {
                loadingSubmit? <ActivityIndicator size="large" color={Colors.primary}/>
                :
                <View style={styles.CenterButtons} >
                    <CustonMainButton text={'Criar'} 
                        onClick={ async ()=>{ await reviewAndSetData()}} 
                    />
                    <CustonSecondaryButton text={'Voltar'} onClick={()=>{setPageType('login')}} />
                </View>
            }
            
        </View>
        )
}
    
