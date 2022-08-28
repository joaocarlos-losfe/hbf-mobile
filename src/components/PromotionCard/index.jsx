import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "./style";

export const PromotionCard = ({imageURI, itemName}) =>
{
    const whatsappChatUrl = `https://wa.me/558988175881?text=Olá%20gostaria%20de%20pedir%20a%20seguinte%20promoção:%20${itemName}`

    function handlePurchaseItem()
    {
        Linking.canOpenURL(whatsappChatUrl).then(suported=>
        {
            if(suported)
                Linking.openURL(whatsappChatUrl);
            else
                ToastAndroid.show("Plataforma não suportada", ToastAndroid.SHORT)

        }).catch(err => ToastAndroid.show("Erro ao abrir o whatsapp", ToastAndroid.SHORT));
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: imageURI}}/>

            <TouchableOpacity activeOpacity={0.6} style={styles.orderButton} onPress={()=>handlePurchaseItem()} >
                <Image style={{height: 32, width: 32, marginRight: 12}} source={require('../../../assets/whatsapp.png')} />
                <Text style={styles.buttonText} >Toque para pedir 😋 </Text>
            </TouchableOpacity>
        </View>
    )
}