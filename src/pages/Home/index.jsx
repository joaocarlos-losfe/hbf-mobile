import { View, Text, Image, ScrollView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { HbLogo } from "../../components/Logo";
import { styles } from "./style";
import { Colors, GlobalStyles } from "../../styles/GlobalStyles";

export default function HomePage()
{
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
                terá de ganhar !{'\n\n'}
                Proximo sorteio acontencerá dia <Text style={styles.strongText}>31/09/2022 </Text>  
                e o prêmio será de <Text style={styles.strongText}>um Samsung Galaxy S22 Ultra</Text>
            </Text>

            <View style={styles.imageContainer} >
                <Image source={require('../../../assets/demo.png')} style={styles.imageDesc}/>
                <Text style={styles.imageDescText}>
                    Possui uma tela de 6.8 polegadas, 5G, 512GB de Memoria e 12GB de RAM, câmera de 108 megapixels que permite ao Samsung Galaxy S22 Ultra tirar fotos fantásticas com uma resolução de 12000x9000 pixels e gravar vídeos em 8K a espantosa resolução de 7680x4320 pixels.
                </Text>
            </View>

            </ScrollView>

        </View>
    )
}