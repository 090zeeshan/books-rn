import { PRIMARY_COLOR } from './../../globals/Colors';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    topInfoView: {
        flexDirection: 'row',
        marginTop: 8,
    },
    bottomInfoView: {
        flex: 1,
        marginTop: 8
    },
    thumbnail: {
        width: 180,
        height: 220,
        resizeMode: 'stretch',
    },
    titleView: {
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 4,
        fontWeight: "900",
    },
    topSubInfoView: {
        flex: 1,
        marginLeft: 8,
    },
    infoRow: {
        flexDirection: 'row',
        marginTop: 2,
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginLeft: 4,
        flex: 1,
    },
    previewButtonView: {
        marginTop: 8,
    },
    description: {
        fontSize: 16,
    },
    listButtonsView: {
        flexDirection: 'row',
        marginTop: 8,
    },
    listButton:{
        flex: 1,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 1,
    },
    listButtonIcon: {

    }
});