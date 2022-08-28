import { StyleSheet } from "react-native";
import { Colors } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create(
{
    container:
    {
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.primary,
        height: 400,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        borderRadius: 4,
        marginBottom: 16
    },

    number:
    {
        width: 100,
        height: 48,
        backgroundColor: Colors.secondary,
        marginVertical: 9,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})