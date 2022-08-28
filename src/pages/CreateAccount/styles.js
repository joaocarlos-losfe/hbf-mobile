import { StyleSheet } from "react-native";
import { Colors } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create({
    CenterButtons:
    {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center'
    },

    errorMsg:
    {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 14,
        margin: 8
    }
})