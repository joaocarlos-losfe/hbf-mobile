import { View, Alert, ActivityIndicator, Text, Image } from "react-native";
import { HbLogo } from "../../components/Logo";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { createContext, useContext, useState } from "react";
import { styles } from "./style";
import { LoginPage } from "../Login";
import { CreateAccountPage } from "../CreateAccount";
import { UserPage } from "../User";

export const drawPageContext = createContext();

export default function DrawPage()
{
    const [pageType, setPageType] = useState("login");
    const [userData, setUserData] = useState({});

    return(
        <KeyboardAwareScrollView>
            <drawPageContext.Provider value={{setPageType, setUserData, userData}}>
                    <View style={GlobalStyles.mainContainer}>
                        <HbLogo/>
                        {   pageType != "userPage" 
                            && 
                            <Image 
                                style={{height: 200, width: 200, marginBottom: 24}}  
                                source={require('../../../assets/undrawlogin.png')} 
                            />
                        }
                        
                        <View style={styles.mainView}>
                        {
                            pageType == "login"? <LoginPage/> 
                            :
                            pageType == "userPage" ? <UserPage/>
                            :
                            <CreateAccountPage/>
                        }
                        </View>
                        
                    </View>
                </drawPageContext.Provider>
        </KeyboardAwareScrollView>
    )
}