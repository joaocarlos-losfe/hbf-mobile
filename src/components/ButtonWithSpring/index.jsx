import { useState } from "react"
import { TouchableOpacity, Text } from "react-native"
import { Colors } from "../../styles/GlobalStyles";

export const ButtonWithSpring = ({text, setNumber}) =>
{
    const [pressed, setPressed] = useState(false);
    const [buttonColor, setButtonColor] = useState(Colors.primary);

    const [clickState, setClickState] = useState(false)

    
    return(
        <TouchableOpacity 
            disabled={clickState}
            activeOpacity={0.8}
            onPress={()=> {setPressed(!pressed); setNumber(text)}} 
            style={ 
                {   backgroundColor: pressed ? Colors.secondary : Colors.primary, 
                    width: 109, 
                    height: 52, 
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 4,
                    padding: 5, margin: 8
                }}>
                
            <Text style={{color: 'white'}} >{text}</Text>
        </TouchableOpacity>
    )
}