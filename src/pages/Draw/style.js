import { StyleSheet } from "react-native";
import { Colors } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create(
{
    userContainer:
    {
        
        borderWidth: 0.8,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-around'
    },

    userPresentation:
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },  

    text:
    {
        color: 'white',
        fontSize: 16
    },

    strongText:
    {
        color: Colors.primary
    },

    selectedNumbers:
    {
        padding: 10,
        borderColor: Colors.secondary,
        borderWidth: 1,
        width: '100%',
        color: 'white',
        borderRadius: 4,
        marginBottom: 24
    }
})

