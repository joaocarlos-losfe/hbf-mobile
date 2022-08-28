import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalStyles';

const styles = StyleSheet.create(
{
    mainText:
    {
        color: Colors.read, 
        textAlign: 'justify', 
        fontSize: 16,
        marginBottom: 48,
    },

    strongText:
    {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    
    imageContainer:
    {
        width: '100%',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        maxHeight: 350,
    },

    imageDesc:
    {
        height: 300,
        width: 300,
    },

    imageDescText:
    {
        fontSize: 10,
        color: Colors.read,
        textAlign: 'justify'
    }
})



export  {styles}