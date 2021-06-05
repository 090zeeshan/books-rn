import { PRIMARY_COLOR } from './../../globals/Colors';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: 'ghostwhite',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerFocused: {
        borderColor: PRIMARY_COLOR,
        shadowColor: 'black',
        elevation: 5,
        backgroundColor: 'ghostwhite',

    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    icon: {
        padding: 6,
    }
});