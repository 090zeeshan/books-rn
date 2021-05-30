import { PRIMARY_COLOR } from './../../globals/Colors';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerFocused: {
        borderColor: PRIMARY_COLOR
    },
    input: {
        flex: 1,
        fontSize: 20,
    },
    icon: {
        padding: 6,
    }
});