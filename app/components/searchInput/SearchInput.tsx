import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SearchInput: React.FC<{ onQueryChanged: (input: string) => void }> = ({ onQueryChanged: onQueryChanged }) => {
    const [inputText, setInputText] = useState("");
    const isCrossVisible = !!inputText;

    const onInputChanged = (input: string) => {
        setInputText(input);
        onQueryChanged(input)
    };

    const onClearPressed = () => {
        onInputChanged("");
    };

    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name="search" color='gray' size={24} />
            <TextInput style={styles.input} value={inputText} placeholder="Search" onChangeText={onInputChanged} />

            {isCrossVisible && <Icon style={styles.icon} name="close-outline" color='gray' size={24} onPress={onClearPressed} />}
        </View>
    );
}

export default SearchInput;