import React, { useState, useContext, Dispatch } from 'react';
import { Text, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
import { resetError, searchBooks, loadMore } from '../../data/context/books/BooksActions';
import snackbarUtil from '../../components/snackbarutil/SnackbarUtil';
import ListBooks from '../../components/listBooks/ListBooks';
import Volume, { DetailedVolumeInfo } from '../../data/model/Volume';
import ScreenNames from '../../navigation/ScreenNames';
import BookDetailsParams from '../bookDetails/BookDetailsParams';

const Home: React.FC<{}> = () => {
    const navigation = useNavigation();
    const [state, dispatch] = useContext(BooksContext) as [BooksState, any];
    const [searchQuery, setSearchQuery] = useState("");

    const isLoading = state.isLoading && searchQuery != "" && !state.isLoadingMore;
    const filteredBooks = searchQuery == ""
        ? []
        : state.books.filter(item => {
            const detailedInfo = item.volumeInfo as DetailedVolumeInfo;

            return detailedInfo.title?.toLowerCase().includes(searchQuery.toLowerCase())
                || detailedInfo.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
                || detailedInfo.description?.toLowerCase().includes(searchQuery.toLowerCase())
                || detailedInfo.authors?.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
                || detailedInfo.publisher?.toLowerCase().includes(searchQuery.toLowerCase());
        });

    const onQueryChanged = (query: string) => {
        setSearchQuery(query);
        if (!!query) {
            dispatch(searchBooks(query));
        }
    }
    const onEndReached = (distance: number) => {
        console.log("distance", distance);
        dispatch(loadMore(searchQuery, state.currentSearchPage, state.totalItemsAvailableForCurrSearch));
    }

    const onBookPressed = (book: Volume) => {
        navigation.navigate(ScreenNames.DETAILS, { book } as BookDetailsParams);
    }

    if (!!state.error) {
        snackbarUtil.showErrorSnackbar(state.error);
        dispatch(resetError())
    }

    return (
        <View style={globalStyles.container}>
            <SearchInput onQueryChanged={onQueryChanged} isEnabled={!isLoading} />
            {isLoading && <ProgressIndicator />}
            <ListBooks books={filteredBooks} onEndReached={onEndReached} isLoadingMore = {state.isLoadingMore} onBookPressed={onBookPressed} />
        </View>
    );
};

export default Home;