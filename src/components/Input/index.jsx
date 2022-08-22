import { TextInput } from "react-native";
import { styles } from "./style";

export const CustonInput = ({placeHolderText, setText}) =>
{
    return (
        <TextInput 
        style={styles.custonInputStyle} 
        placeholder={placeHolderText}
        placeholderTextColor='gray'
        onChangeText={value => {setText(value)}}
        />
    )
}