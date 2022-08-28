import { TextInput } from "react-native";
import { styles } from "./style";

export const CustonInput = ({placeHolderText, setText, keyType}) =>
{
    return (
        <TextInput 
        style={styles.custonInputStyle} 
        placeholder={placeHolderText}
        placeholderTextColor='gray'
        onChangeText={value => {setText(value)}}
        keyboardType={keyType}
    
        />
    )
}