import { useState } from "react"
import { View } from "react-native"
import { ButtonWithSpring } from "../ButtonWithSpring";
import { styles } from "./style"

export const NumberSelector = ({appendNumbers, enabledClick})=>
{
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    
    function setNumber(number)
    {
        appendNumbers(number)
    }

    return(
        <View style={styles.mainContainer} >
        {
            numbers.map(number=>{ return <ButtonWithSpring key={number} text={number} enabledClick={enabledClick} setNumber={setNumber} />})
        }
        </View>
    )
}