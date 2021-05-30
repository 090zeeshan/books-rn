import React, { useState, useContext, Dispatch } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import globalStyles from '../../globals/styles';
import SearchInput from '../../components/searchInput/SearchInput';
import * as BooksApi from '../../data/api/BooksApi';
import ProgressIndicator from '../../components/progressIndicator/ProgressIndicator';
import { BooksContext, BooksContextProvider } from '../../data/context/books/BooksContext';
import BooksState from '../../data/context/books/BooksState';
import { Thunk } from 'react-hook-thunk-reducer';
import BooksActionType from '../../data/context/books/BooksActionType';
import BooksAction from '../../data/context/books/BooksAction';
import { resetError, searchBooks } from '../../data/context/books/BooksActions';
import snackbarUtil from '../../components/snackbarutil/SnackbarUtil';
import ListBooks from '../../components/listBooks/ListBooks';
import Volume from '../../data/model/Volume';

const Home: React.FC<{}> = () => {
    const [state, dispatch] = useContext(BooksContext) as [BooksState, any];
    const [searchQuery, setSearchQuery] = useState("");

    const isLoading = state.isLoading && searchQuery != "";
    const filteredBooks = searchQuery == ""
        ? []
        : state.books.filter(item => item.volumeInfo.title.includes(searchQuery));

    const onQueryChanged = (query: string) => {
        setSearchQuery(query);
        if (!!query) {
            dispatch(searchBooks(query));
        }
    }
    const onEndReached = (distance: number) => {
        console.log("distance", distance);
    }

    const onBookPressed = (book: Volume) => {

    }

    if (!!state.error) {
        snackbarUtil.showErrorSnackbar(state.error);
        dispatch(resetError())
    }

    return (
        <View style={globalStyles.container}>
            <SearchInput onQueryChanged={onQueryChanged} isEnabled={!isLoading} />
            {isLoading && <ProgressIndicator />}
            <ListBooks books={filteredBooks} onEndReached={onEndReached} onBookPressed={onBookPressed} />
        </View>
    );
};

export default Home;