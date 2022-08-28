import { View, Alert, ActivityIndicator, Text, Image } from "react-native";
import { HbLogo } from "../../components/Logo";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { createContext, useContext, useState } from "react";
import { styles } from "./style";
import { LoginPage } from "../Login";
import { CreateAccountPage } from "../CreateAccount";

export const drawPageContext = createContext();

export default function DrawPage()
{
    const [pageType, setPageType] = useState("login");

    return(
        <KeyboardAwareScrollView>

            <View style={GlobalStyles.mainContainer}>
                <HbLogo/>
                <Image style={{height: 200, width: 200, marginBottom: 24}}  source={require('../../../assets/undrawlogin.png')} />
                
                <drawPageContext.Provider value={{setPageType}}>
                    <View style={styles.mainView}>
                    {
                        pageType == "login"?
                        <LoginPage/> 
                        :
                        <CreateAccountPage/>
                    }
                    </View>
                </drawPageContext.Provider>
            
            </View>
        </KeyboardAwareScrollView>
    )
}