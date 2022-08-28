import { StyleSheet } from "react-native";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";

export const styles= StyleSheet.create({
    text:
    {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    strongText:
    {
        color: Colors.primary,
        fontWeight: 'bold'
    },

    center:
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 24
    },

    errorMsg:
    {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 14,
        margin: 8
    }
})