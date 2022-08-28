import { View, Image, Text } from "react-native"
import { CustonMainButton } from "../../components/Button"
import { CustonInput } from "../../components/Input"
import { drawPageContext } from "../Draw"
import { styles } from "./styles"

export const LoginPage = ()=>
{
    return(
        
    <drawPageContext.Consumer>
    {
        context => 
        (
            <View>
                <CustonInput placeHolderText={"Whatssap"} keyType={'number-pad'}/>
                <CustonInput placeHolderText={"Sua senha"} />
                <View style={styles.center} >
                    <CustonMainButton text={'Entrar'}/>
                </View>
                <Text style={styles.text}>Não possui uma conta? 
                    <Text style={styles.strongText} onPress={()=>{ context.setPageType('CreateAccountPage')}} > Clique aqui para criar</Text>
                </Text>

            </View>
        )
    }
        
    </drawPageContext.Consumer>
    )
}