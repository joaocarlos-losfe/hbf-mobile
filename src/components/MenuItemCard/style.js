import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/GlobalStyles';

const style = StyleSheet.create
({
    card: 
    {
        borderColor: Colors.primary,
        borderWidth: 0.8,
        padding: 12,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 24,
    },

    image:
    {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 12
    },

    title:
    {
        color: Colors.primary,
        fontSize: 14,
    },

    desc:
    {
        color: Colors.read,
        width: '100%',
        marginBottom: 8,
        fontSize: 12
    },

    purchaseItemContainer:
    {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 12,
    },

    button:
    {
        backgroundColor: Colors.secondary,
        padding: 8,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    buttonTextColor:
    {
        color: Colors.read,
        marginLeft: 12
    }

})

export {style}