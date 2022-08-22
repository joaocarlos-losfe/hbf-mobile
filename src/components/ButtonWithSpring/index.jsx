import { useState } from "react"
import { TouchableOpacity, Text } from "react-native"
import { Colors } from "../../styles/GlobalStyles";

export const ButtonWithSpring = ({text, setNumber, enabledClick}) =>
{
    const [pressed, setPressed] = useState(false);

    
    return(
        <TouchableOpacity 
            disabled = {!enabledClick}
            onPress ={()=> { setPressed(!pressed) ; setNumber(text)}} 
            style={ 
                {   backgroundColor: pressed ? Colors.primary : Colors.secondary,
                    borderWidth: 1,
                    borderColor: Colors.primary,
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