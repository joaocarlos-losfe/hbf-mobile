import { useState } from "react";
import { View, Alert, ActivityIndicator, Text } from "react-native";
import { HbLogo } from "../../components/Logo";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";
import AccountPage from "../accountPage";

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { API } from "../../services/ApiRequest";
import { styles } from "./style";
import { NumberSelector } from "../../components/NumberSelector";
import { CustonMainButton } from "../../components/Button";
import { CustonSecondaryButton } from "../../components/SecondaryButton";


export default function DrawPage()
{
    const [isLogued, setIsLogued] = useState(false);
    const [returnToLoginPage, setReturnToLoginPage] = useState(false); 

    const [phone, setPhoneText] = useState("");
    const [pass, setPassText] = useState("");
    const [loadingUser, setLoadingUser] = useState(false);

    const [userData, setUserData] = useState(undefined);

    const [selectedNumbers, setSelectedNumbers] = useState([]);

    const [enableClick, setEnableClick] = useState(true);

    async function handleLogin()
    {
        setLoadingUser(true);
    
        if(phone == "" || pass == "")
            Alert.alert("Campos vazios");
        else
        {
            const result = await API.post(`houseburguer/api/user/login/${phone}`, {pass});
            
            if(!result.data.phone)
                Alert.alert("Usuário ou senha invalida");
            else
            {
                setUserData(result.data);
                setIsLogued(true);
            }
                
        }
    
        setPhoneText("");
        setPassText("");

        setLoadingUser(false);
    }

    function clearSelection()
    {
        setEnableClick(true);
        setSelectedNumbers([]);
    }

    function appendNumbers(number)
    {
        
        if(selectedNumbers.length == userData.currentPurchase - 1)
            setEnableClick(false); 

        if(selectedNumbers.length < userData.currentPurchase )
            setSelectedNumbers( selectedNumbers => [...selectedNumbers, number]); 
        
        //setSelectedNumbers( current=> current.filter(element => { return element !== number } ) )
        
            
    }

    return(
        <KeyboardAwareScrollView>
            <View style={GlobalStyles.mainContainer}>
                <HbLogo/>
                {
                    loadingUser? <ActivityIndicator size='large' color={Colors.primary} />
                    :
                    !isLogued?
                    <AccountPage phoneText={setPhoneText} passText={setPassText} handleLoginState={handleLogin} />
                    :
                    <View style={styles.userContainer}>
                        <View style={styles.userPresentation}>
                            <Text style={styles.text}>Olá, {userData.fullName} </Text>
                            <Text style={{color: 'white'}}>Nivel: <Text style={styles.strongText}>{userData.level}{' (bronze)'}</Text> </Text>     
                        </View>

                        <Text style={{color: 'gray', marginBottom: 8}}>Números escolhidos: <Text style={styles.strongText} >{selectedNumbers.length} / {userData.currentPurchase}</Text></Text>
                        <Text style={styles.selectedNumbers}>{selectedNumbers.map((number)=> { return number + ' '} )}</Text>
                        <NumberSelector appendNumbers={appendNumbers} enabledClick={enableClick} />

                        <View style={ { marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' } } > 
                            <CustonMainButton text={'Salvar'}/> 
                            <CustonSecondaryButton text={'Limpar'} onClick = {()=>{clearSelection()}} />
                        </View>

                    </View>
                }
            </View>
        </KeyboardAwareScrollView>
    )
}