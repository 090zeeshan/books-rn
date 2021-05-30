import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SearchInput: React.FC<{
    onQueryChanged: (input: string) => void;
    isEnabled?: boolean;
}> = ({ onQueryChanged: onQueryChanged, isEnabled = true }) => {
    const [inputText, setInputText] = useState("");
    const [isInputFocused, setInputFocused] = useState(false);

    const isCrossVisible = !!inputText;

    useEffect(() => {
        if (inputText == "") {
            onQueryChanged(inputText);
            return
        }
        const handler = setTimeout((oldQuery) => {
            onQueryChanged(inputText);
        }, 1500);
        return () => clearTimeout(handler);
    }, [inputText]);

    const onInputChanged = (input: string) => {
        setInputText(input);
    };

    const onClearPressed = () => {
        onInputChanged("");
    };

    const onInputFocused = () => {
        setInputFocused(true);
    }

    const onInputFocusOut = () => {
        setInputFocused(false);
    }

    return (
        <View style={[styles.container, isInputFocused ? styles.containerFocused : {}]}>
            <Icon style={styles.icon} name="search" color='gray' size={24} />
            <TextInput editable={isEnabled} style={styles.input} value={inputText} placeholder="Search" onChangeText={onInputChanged} onFocus={onInputFocused} onBlur={onInputFocusOut} />
            {isCrossVisible && <Icon style={styles.icon} name="close-outline" color='gray' size={24} onPress={onClearPressed} />}
        </View>
    );
}

export default SearchInput;