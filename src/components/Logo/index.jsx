import { View, Text, Image} from "react-native";

export function HbLogo()
{
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
            <Image source={require('../../../assets/monophy.gif')} style={{height: 48, width: 48}}/>
            <Text style={{color: 'white', fontWeight: '600', fontSize: 18}} >House Burguer</Text>
        </View>
    )
}