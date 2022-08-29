import { View, Text, ActivityIndicator } from "react-native";

import { createContext, useContext, useState } from "react";
import { drawPageContext } from "../Draw";

import { styles } from "./styles";
import { NumPad } from "../../components/NumPad";
import { CustonMainButton } from "../../components/Button";
import { CustonSecondaryButton } from "../../components/SecondaryButton";

import { API } from "../../services/ApiRequest";
import { Colors } from "../../styles/GlobalStyles";
import { Check } from "../../components/Check";

export const userPageContext = createContext();

export const UserPage = ()=>
{
    const {userData} = useContext(drawPageContext);
    const [drawNumbers, setDrawNumbers] = useState([]);
    const [maxCount, setMaxCount] = useState(userData.currentPurchase);

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    const [wasAdded, setWasAdded] = useState(false);
   
    async function handleSubmitNumbers()
    {
        setLoadingSubmit(true);
        const response = await API.put(`houseburguer/api/user/append-numbers/${userData.phone}`, {numbers: drawNumbers});
        console.log(response.data);

        if(response.data.wasAdded)
        {
            setMaxCount(0);
            setWasAdded(true);
        }
        setLoadingSubmit(false);
    }

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

                {
                    maxCount == 0 && !wasAdded ? 

                    <View>
                        <Text style={{color: Colors.primary, fontSize: 36, textAlign: 'center'}} >
                            Sinto muito, você ainda não possui compra de lanche recente para escolher seus números 😢</Text>
                    </View>
                    :
                    wasAdded? 
                    <Text style={{fontSize: 32, color: 'white', textAlign: 'center'}}>Números escolhidos com sucesso. Boa sorte no sorteio 😉</Text>
                    :
                    <View>
                        <View style={styles.drawNumberContainer}>
                            <Text style={styles.text}>Escolha seus números do sorteio: 
                                <Text style={styles.strongText} >{ '   ' + drawNumbers.length}/{maxCount}</Text> 
                            </Text>

                            <Text style={styles.drawNumber}>
                                {drawNumbers.map(number=> number + '    ') }
                            </Text>
                        </View>
                        {
                            loadingSubmit ? <ActivityIndicator color={Colors.primary} size={'large'} />
                            :
                            <View>
                                <NumPad/>
                                <View style={styles.actionsButtons}>
                                    <CustonMainButton text={"Salvar"}  onClick={()=>{handleSubmitNumbers()}} />
                                    <CustonSecondaryButton text={"Limpar"} onClick={()=>{setDrawNumbers([])}} />
                                </View>
                            </View>
                        }
                    </View>
                }
                        
            </userPageContext.Provider>
            
        </View>
    )
}