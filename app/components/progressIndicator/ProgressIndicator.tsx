import React, {useContext} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { PRIMARY_COLOR } from '../../globals/Colors';
import styles from '../../components/progressIndicator/styles';

export default () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={PRIMARY_COLOR} />
        </View>
    )
}