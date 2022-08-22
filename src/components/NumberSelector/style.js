import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalStyles';

export const styles = StyleSheet.create(
{
    mainContainer:
    {
        borderColor: Colors.secondary,
        borderWidth: 1,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        height: 410,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }    
})