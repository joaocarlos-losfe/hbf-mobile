import { View } from "react-native";
import { FaCheck } from "react-icons/fa";
import { Colors } from "../../styles/GlobalStyles";

export const Check = ()=>
{
    return (
        <View style={{width: '100%', height: '600', alignItems: 'center', justifyContent: 'center'}} >
            <FaCheck style={{fontSize: 64, color: Colors.primary}}/>
        </View>
    )
}