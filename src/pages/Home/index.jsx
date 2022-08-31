import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { HbLogo } from "../../components/Logo";
import { styles } from "./style";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";
import { useEffect, useState } from "react";

import { API } from "../../services/ApiRequest";


export default function HomePage()
{
    
    const [loadingData, setLoadingData] = useState(false);

    const [dadosSorteio, setDadosSorteio] = useState({});

    const [message, setMessage] = useState("");

    async function loadLastData()
    {   
        setLoadingData(true);

        const response = await API.get("/houseburguer/api/lottery/get/last");


        setDadosSorteio(response.data.item);

        if(response.data.item.winner || !response.data.item)
        {
            setMessage("Não há um sorteio agendado no momento!");
            console.log('winner');
        }
        else
            setDadosSorteio(response.data.item);            

        setLoadingData(false);

    }

    function getCurrentLocaleDate()
    {
        var numDate= new Date(dadosSorteio.date);

        return `${numDate.getDay()}/${numDate.getMonth()}/${numDate.getFullYear()}`;
    }

    useEffect(()=>{ loadLastData() }, []);
    
    return (
        <View style={GlobalStyles.mainContainer} >
            <StatusBar style='light' backgroundColor={Colors.primary} />
            <HbLogo/>

            <ScrollView>

            <Text style={styles.mainText}>
                Quer ter a chance de ganhar um premio todo mês? 
                basta fazer um pedido de qualquer lanche e 
                escolher seu número da sorte!
                Cada compra realizada lhe dará a escolha de um
                número. Quanto mais comprar, mais chances 
                terá de ganhar!
            </Text>

            {
                loadingData ? 
                <ActivityIndicator size="large" color={Colors.primary} /> 
                :   
                message != "" ? <Text style={{color: Colors.primary, fontSize: 18, textAlign: 'center'}} >{message}</Text>
                :
                <View>
                    <Text style={styles.mainText} >
                        Próximo sorteio acontencerá dia <Text style={styles.strongText}>{getCurrentLocaleDate() } </Text>  
                        e o prêmio será de <Text style={styles.strongText}>{dadosSorteio.award}</Text>
                    </Text>

                    <View style={styles.imageContainer} >
                        <Image source={{uri: dadosSorteio.referenceImageUrl}} style={styles.imageDesc}/>
                        <Text style={styles.imageDescText}>
                            {dadosSorteio.description}
                        </Text>
                    </View>
                </View>

            }
            </ScrollView>

        </View>
    )
}