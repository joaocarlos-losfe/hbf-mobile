import { View, Text } from "react-native";

import { createContext, useContext, useState } from "react";
import { drawPageContext } from "../Draw";

import { styles } from "./styles";
import { NumPad } from "../../components/NumPad";
import { CustonMainButton } from "../../components/Button";
import { CustonSecondaryButton } from "../../components/SecondaryButton";

export const userPageContext = createContext();

export const UserPage = ()=>
{
    const {userData} = useContext(drawPageContext);
    const [drawNumbers, setDrawNumbers] = useState([]);
    const [maxCount, setMaxCount] = useState(userData.currentPurchase);

    return (
        <View>
            <userPageContext.Provider value={{drawNumbers, setDrawNumbers, maxCount}}>

                <View style={styles.header}>
                    <Text style={styles.title}>Olá 
                        <Text style={styles.strongText}>{' ' + userData.fullName}</Text>
                    </Text>

                    <Text style={styles.title}>Nivel: 
                        <Text style={styles.strongText}>{ ' ' + userData.level}</Text>
                    </Text>
                </View>

                <View style={styles.drawNumberContainer}>
                    <Text style={styles.text}>Escolha seus números do sorteio: 
                        <Text style={styles.strongText} >{ '   ' + drawNumbers.length}/{maxCount}</Text> 
                    </Text>

                    <Text style={styles.drawNumber}>
                        {drawNumbers.map(number=> number + '    ') }
                    </Text>
                </View>

                <NumPad/>

                <View style={styles.actionsButtons}>
                    <CustonMainButton text={"Salvar"}/>
                    <CustonSecondaryButton text={"Limpar"} onClick={()=>{setDrawNumbers([])}} />
                </View>
        
            </userPageContext.Provider>
            
        </View>
    )
}