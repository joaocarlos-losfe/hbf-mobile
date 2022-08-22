import { View, Image, Text, Button, TouchableOpacity, Linking, ToastAndroid } from "react-native";
import { Colors } from "../../styles/GlobalStyles";
import { style } from "./style";

export function MenuItemCard({img, itemName, price, desc})
{
    const WhatssapChatUrl = `https://wa.me/558988175881?text=Olá%20gostaria%20de%20pedir%20o%20seguinte%20lanche:%20${itemName}`

    function handlePurchaseItem()
    {
    
        Linking.canOpenURL(WhatssapChatUrl).then(suported=>
        {
            if(suported)
                Linking.openURL(WhatssapChatUrl);
            else
                ToastAndroid.show("Plataforma não suportada", ToastAndroid.SHORT)

        }).catch(err => ToastAndroid.show("Erro ao abrir o whatsapp", ToastAndroid.SHORT));
    }

    return(
        <View style={style.card}>
            <Image style={style.image} source={{uri: img}} />

            <View style={style.purchaseItemContainer}>
                <Text style={style.title}>{itemName} </Text> 
                <TouchableOpacity style={style.button} onPress={handlePurchaseItem} >
                    <Image style={{height: 20, width: 20}} source={require('../../../assets/whatsapp.png')} />
                    <Text style={style.buttonTextColor}>Fazer pedido</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={style.desc}>R$ {price} </Text>
            {desc && <Text style={style.desc}>{desc}</Text>}
            
        </View>
    )
}