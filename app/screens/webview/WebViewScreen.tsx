import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationProp, Route, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import globalStyles from '../../globals/styles';
import styles from './styles';
import ProgressIndicator from '../../components/progressIndicator/ProgressIndicator';

interface IWebViewScreenProps {
    route: Route<string, { url: string, title: string }>;
};

const WebViewScreen = (props: IWebViewScreenProps) => {
    const [isShowIndicator, setShowIndicator] = useState(true);
    const { title, url } = props.route.params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
        });
    }, []);

    const onPageLoaded = () => {
        setShowIndicator(false);
    };

    return (
        <View style={globalStyles.container}>
            {isShowIndicator && <ProgressIndicator />}
            <WebView style={styles.webview} source={{ uri: url }} onLoadEnd={onPageLoaded} />
        </View>
    );
}

export default WebViewScreen;