import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./style";
import { GlobalStyles } from "../../styles/GlobalStyles";

import { HbLogo } from "../Logo";

export const PromotionCard = ({imageURI}) =>
{
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imageURI}}/>

            <TouchableOpacity activeOpacity={0.6} style={styles.orderButton} >
                <Image style={{height: 32, width: 32, marginRight: 12}} source={require('../../../assets/whatsapp.png')} />
                <Text style={styles.buttonText} >Toque para pedir 😋 </Text>
            </TouchableOpacity>
        </View>
    )
}