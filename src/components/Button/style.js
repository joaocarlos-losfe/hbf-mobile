import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalStyles';

export const styles = StyleSheet.create(
{
    custonButtonStyle:
    {
        backgroundColor: Colors.primary,
        height: 58,
        width: 150,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },

    text:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})