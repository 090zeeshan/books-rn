import React, { useContext, useEffect } from 'react';
import { Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';
import { NavigationProp, Route, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import BookDetailsParams from './BookDetailsParams';
import styles from '../bookDetails/styles';
import globalStyles from '../../globals/styles';
import Volume, { getAuthorsText, getCategoriesText, getThumbnailSrc } from '../../data/model/Volume';
import { ScrollView } from 'react-native-gesture-handler';
import { BooksContext } from '../../data/context/books/BooksContext';
import BooksState from '../../data/context/books/BooksState';
import { DetailedVolumeInfo } from '../../data/model/Volume';
import { toggleFavourite, toggleTBR } from '../../data/context/books/BooksActions';
import ScreenNames from '../../navigation/ScreenNames';

const bookDetails: React.FC<{ route: Route<string, BookDetailsParams> }> = ({ route }) => {
    const navigation = useNavigation();
    const [state, dispatch] = useContext(BooksContext) as [BooksState, any];
    const book = state.books.find(item => item.id == route.params.book.id) as Volume;
    const volumeDetails = book.volumeInfo as DetailedVolumeInfo;

    useEffect(() => {
        navigation.setOptions({ headerTitle: volumeDetails.title });
    }, []);

    const onPreviewPressed = () => {
        navigation.navigate(ScreenNames.WEBVIEW, {
            url: volumeDetails.previewLink,
            title: "Preview of " + volumeDetails.title,
        })
    }

    const onFavouritePressed = () => {
        dispatch(toggleFavourite(book.id));
    };

    const onTBRPressed = () => {
        dispatch(toggleTBR(book.id));
    };

    const renderInfoRow = (lbl: string, value: string) => {
        return (
            <View style={styles.infoRow} key={lbl}>
                <Text style={styles.infoLabel}>{lbl}:</Text>
                <Text style={styles.infoValue}>{value || 'N/A'}</Text>
            </View>
        );
    }

    const tbrIconSize = book.isTBR ? 28 : 24;
    const favIconSize = book.isFavourite ? 28 : 24;
    const tbrBtnColor = book.isTBR ? 'green' : 'white';
    const favBtnColor = book.isFavourite ? 'red' : 'white';
    const tbrIconColor = book.isTBR ? 'white' : 'green';
    const favIconColor = book.isFavourite ? 'white' : 'red';

    const renderListButtons = () => (
        <View style={styles.listButtonsView}>
            <TouchableOpacity style={[styles.listButton, { backgroundColor: favBtnColor }]} onPress={onFavouritePressed}>
                <Icon style={styles.listButtonIcon} name={'heart-outline'} color={favIconColor} size={favIconSize} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.listButton, { backgroundColor: tbrBtnColor }]} onPress={onTBRPressed}>
                <Icon style={styles.listButtonIcon} name={'book-outline'} color={tbrIconColor} size={tbrIconSize} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={[globalStyles.container, styles.container]}>
            <View style={styles.titleView}>
                <Text style={styles.title}>{volumeDetails.title}</Text>
                <Text style={styles.subtitle}>{volumeDetails.subtitle}</Text>
            </View>

            <View style={styles.topInfoView}>
                <Image style={styles.thumbnail} source={getThumbnailSrc(book)} />
                <View style={styles.topSubInfoView}>
                    {renderInfoRow("Authors", getAuthorsText(book))}
                    {renderInfoRow("Publisher", volumeDetails.publisher)}

                    {renderInfoRow("Published Date", volumeDetails.publishedDate)}

                    {volumeDetails.industryIdentifiers.map(item => (
                        renderInfoRow(item.type, item.identifier)
                    ))
                    }

                    {renderInfoRow("Page Count", "" + volumeDetails.pageCount)}

                    {renderInfoRow("Language", volumeDetails.language?.toLocaleUpperCase())}

                    {renderInfoRow("Categories", getCategoriesText(book))}

                    {renderInfoRow("Avg. Rating", volumeDetails.averageRating?.toString())}

                </View>
            </View>

            <View style={styles.bottomInfoView}>
                <ScrollView persistentScrollbar={true}>
                    <Text style={styles.description}>{volumeDetails.description}</Text>
                </ScrollView>

                {renderListButtons()}

                <View style={styles.previewButtonView}>
                    <Button title="Preview Book" onPress={onPreviewPressed} />
                </View>
            </View>
        </View>
    );
};

export default bookDetails;