import { StyleSheet } from "react-native";

import  { Colors } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create(
{
    container: 
    {
        width: 340,
        height: 640,
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        marginRight: 16,
        alignItems: 'center'
    },

    image:
    {
        height: '90%',
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
        
    },

    orderButton:
    {
        width: '100%',
        padding: 10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 64,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },

    buttonText:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})