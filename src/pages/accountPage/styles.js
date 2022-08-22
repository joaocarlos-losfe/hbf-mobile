import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalStyles';

const styles = StyleSheet.create(
{
    form:
    {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',

    },

    newAccountPageContainer:
    {
        marginTop: 24,
        display: 'flex',
        flexDirection: 'row'
    },

    text:
    {
        color: 'white',
        fontSize: 16,
    },

    strongText:
    {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16
    },

    buttonsContainer:
    {
        display: 'flex',
        flexDirection: 'row'
    }



});

export {styles}