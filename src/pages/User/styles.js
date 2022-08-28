import { StyleSheet } from "react-native";
import { Colors } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create(
{
    header:
    {
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom: 32
    },

    title:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    strongText:
    {
        color: Colors.primary
    },

    text:
    {
        color: 'white',
        fontSize: 12,
        marginBottom: 12,
    },

    drawNumberContainer:
    {
        marginBottom: 24,
    },

    drawNumber:
    {
        padding: 10,
        width: '100%',
        borderColor: Colors.secondary,
        borderWidth: 1,
        color: Colors.primary,
        borderRadius: 4,
        fontSize: 14
    },

    actionsButtons:
    {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }


})