import { useState } from "react";
import { View, Text, Animated, Image } from "react-native";
import { CustonMainButton } from "../../components/Button";
import { CustonInput } from "../../components/Input";
import { CustonSecondaryButton } from "../../components/SecondaryButton";
import {styles} from "./styles";


export default function AccountPage({handleLoginState, phoneText, passText})
{
    const [pageForDisplay, setPageForDisplay] = useState('login');
    

    async function handleSubmitLogin()
    {
        await handleLoginState(true);
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
                <View style={styles.form}>

                    <CustonInput placeHolderText={'Whatssap'}/>
                    <CustonInput placeHolderText={'Cidade'}/>
                    <CustonInput placeHolderText={'Endereço'}/>
                    <CustonInput placeHolderText={'Defina uma senha'}/>

                    <View style={styles.buttonsContainer}>

                        <CustonMainButton text={'Criar'} />
                        <CustonSecondaryButton text={'cancelar'} onClick={()=>{setPageForDisplay('login')}} />

                    </View>

                </View>
            }
            
        </View>
    )
}