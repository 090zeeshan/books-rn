import Snackbar from "react-native-snackbar"

interface ISnackbarUtil {
    showErrorSnackbar: (erro: string) => void;
};


const showErrorSnackbar = (error: string) => {
    Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_SHORT,
        textColor: 'white',
        backgroundColor: 'red'
    });
}

const snackbarUtil = { showErrorSnackbar: showErrorSnackbar } as ISnackbarUtil;

export default snackbarUtil;