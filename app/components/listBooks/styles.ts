import { PRIMARY_COLOR } from './../../globals/Colors';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    booksList: {
        marginTop: 8,
        flex: 1,
    },
    bookView: {
        marginVertical: 8,
        padding:8,  
        elevation: 5,
        shadowColor:'black',
        backgroundColor: 'ghostwhite',
        borderColor: PRIMARY_COLOR,
        borderRadius: 10,
        borderWidth: 2,
        flex: 1,
        flexDirection: "row",

    },
    bookThumbnail: {
        padding: 4,
        width: 100,
        height: 130,
    },
    bookTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    bookSubTitle: {
        fontSize: 16
    },
    bookInfoView: {
        flex: 1,
        marginHorizontal: 8,
    },
    infoView: {
        flexDirection: "row",
    },
    infoLabel: {
        fontWeight: 'bold',
    },
    infoValue: {
        marginLeft: 4,
    },
    listIconsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContentContainer: { 
        flexGrow: 1 ,
    },
    emptyListNote: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'gray',
    }
});