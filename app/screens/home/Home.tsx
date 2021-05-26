import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import globalStyles from '../../globals/styles';
import SearchInput from '../../components/searchInput/SearchInput';

const Home: React.FC<{}> = () => {
    console.log("Hello");

    const onQueryChanged = (query: string) => {
        console.log("query", query);
    }

    return (
        <View style={globalStyles.container}>
            <SearchInput onQueryChanged={onQueryChanged} />
        </View>
    );
};

export default Home;