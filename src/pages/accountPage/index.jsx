import { useState } from "react";
import { View, Text, Animated, Image, ActivityIndicator, Alert } from "react-native";
import { CustonMainButton } from "../../components/Button";
import { CustonInput } from "../../components/Input";
import { CustonSecondaryButton } from "../../components/SecondaryButton";
import {styles} from "./styles";

import { API } from "../../services/ApiRequest";
import { Colors } from "../../styles/GlobalStyles";


export default function AccountPage({handleLoginState, phoneText, passText})
{
    const [pageForDisplay, setPageForDisplay] = useState('login');

    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [addres, setAddres] = useState("");
    const [pass, setPass] = useState("");

    const [loadingSubmit, setLoadingSubmit] = useState(false);
    

    async function handleSubmitLogin()
    {
        await handleLoginState(true);
    }

    function clearInputs()
    {
        setPhone("");
        setCity("");
        setAddres("");
        setPass("");
    }

    async function handleCreateAccount()
    {
        if(phone == "" || city == "" || addres == "" || pass == "")
            return;

        setLoadingSubmit(true);
        

        const response = await API.put(`/houseburguer/api/user/userRegister/${phone}`, 
        {
            city,
            referencyPoit: addres,
            pass
        })
        
        Alert.alert(response.data.message);

        if(response.data.user)
            setPageForDisplay('login');
        
        clearInputs();
        setLoadingSubmit(false);
    }
    
    return (
        <View style={styles.form}>
            <Image style={{height: 200, width: 200, marginBottom: 64}} source={require('../../../assets/undrawlogin.png')}/>

            {
                pageForDisplay == 'login'? 
                
                <View style={styles.form}>

                    <CustonInput setText={phoneText} placeHolderText={"Seu número do Whatssap"} />

                    <CustonInput setText={passText} placeHolderText="Senha"/>

                    <CustonMainButton text='Entrar' onClick={handleSubmitLogin}/>

                    <View>
                        <View  style={styles.newAccountPageContainer}>
                            <Text style={styles.text}>Não possui uma conta? </Text>
                            <Text onPress={()=>setPageForDisplay("NewAccout")} style={styles.strongText}> Clique aqui para criar</Text>
                        </View>
                    </View>
                </View>
                :

                loadingSubmit ? 
                <ActivityIndicator color={Colors.primary} size='large'/>
                :
                <View style={styles.form}>

                    <CustonInput placeHolderText={'Whatssap'} setText={setPhone}/>
                    <CustonInput placeHolderText={'Cidade'} setText={setCity} />
                    <CustonInput placeHolderText={'Endereço'} setText={setAddres}/>
                    <CustonInput placeHolderText={'Defina uma senha'} setText={setPass}/>

                    <View style={styles.buttonsContainer}>

                        <CustonMainButton text={'Criar'} onClick={handleCreateAccount}/>

                        <CustonSecondaryButton text={'Cancelar'} onClick={()=>{setPageForDisplay('login')}} />

                    </View>

                </View>
            }
            
        </View>
    )
}