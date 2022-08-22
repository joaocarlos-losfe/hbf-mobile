import { TouchableOpacity, Text } from "react-native"
import { styles } from "./style"

export const CustonSecondaryButton = ({onClick, text}) =>
{
    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.custonButtonStyle} onPress={onClick}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}