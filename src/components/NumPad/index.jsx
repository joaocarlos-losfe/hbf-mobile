import { useEffect, useState } from "react"
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native"
import { Colors } from "../../styles/GlobalStyles";
import { styles } from "./styles"

import { useContext } from "react";
import { userPageContext } from "../../pages/User";

import {API} from "../../services/ApiRequest";

export const NumPad = ()=>
{
    const [numbers, setNumbers] = useState([]);

    const {drawNumbers, setDrawNumbers, maxCount} = useContext(userPageContext);

    const [loadingNumbers, setLoadingNumbers ] = useState(true);

    async function getNumpadNumbers()
    {
        const result = await API.get("houseburguer/api/lotteryNumbers/get");

        if(result.data.selectedArr)
            setNumbers(result.data.selectedArr);
        
        setLoadingNumbers(false);
    }

    function handleNumber(n)
    {
        if(drawNumbers.length == maxCount )
            return;

        setDrawNumbers((drawNumbers)=>[...drawNumbers, n]);
    }

    useEffect(()=>{ getNumpadNumbers() }, [])
    
    return(
        <View style={styles.container} >
        {
            loadingNumbers ? <ActivityIndicator size="large" color={Colors.primary}/>
            :
            numbers.map(n=>
            {
                return  <TouchableOpacity key={n} 
                        onPress={()=>{  handleNumber(n) }}
                        activeOpacity={0.5}
                        style={
                        {
                            width: 100,
                            height: 48,
                            backgroundColor: Colors.secondary,
                            marginVertical: 9,
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{color: 'white', fontWeight: 'bold'}} >{n}</Text>
                        </TouchableOpacity>
            })
        }
        </View>
    )
}