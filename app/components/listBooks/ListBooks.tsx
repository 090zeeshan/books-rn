import React from 'react';
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Volume, { getAuthorsText } from '../../data/model/Volume';
import styles from './styles';


interface IBookViewProps {
    book: Volume;
    onItemPressed: (book: Volume) => void;
};

const BookView = (props: IBookViewProps) => {
    const book = props.book;

    const onItemPressed = () => {
        props.onItemPressed(book);
    }

    return (
        <TouchableOpacity onPress={onItemPressed}>
            <View style={styles.bookView}>
                <Image style={styles.bookThumbnail} source={{ uri: book.volumeInfo.imageLinks.smallThumbnail || book.volumeInfo.imageLinks.smallThumbnail || "" }} />
                <View style={styles.bookInfoView}>
                    <Text style={styles.bookTitle}>{book.volumeInfo.title}</Text>
                    <Text style={styles.bookSubTitle}>{book.volumeInfo.subtitle}</Text>
                    <View style={styles.infoView}>
                        <Text style={styles.infoLabel}>Authors:</Text>
                        <Text style={styles.infoValue}>{getAuthorsText(book)}</Text>
                    </View>
                    <View style={styles.infoView}>
                        <Text style={styles.infoLabel}>Published Date:</Text>
                        <Text style={styles.infoValue}>{book.volumeInfo.publishedDate}</Text>
                    </View>
                    <View style={styles.listIconsView}>
                        <Icon color="red" size={24} name={book.isFavourite? 'heart': 'heart-outline'} />
                        <Icon color="green" size={24} name={book.isTBR? 'book': 'book-outline'} />
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    );
};

interface IListBooksProps {
    books: Volume[];
    onEndReached: (distance: number) => void;
    onBookPressed: (book: Volume) => void;
}

export default (props: IListBooksProps) => {
    return (
        <View style={styles.booksList}>
            <FlatList
                onEndReached={(info) => props.onEndReached(info.distanceFromEnd)}
                onEndReachedThreshold={0.5}
                renderItem={(itme) => <BookView book={itme.item} onItemPressed={props.onBookPressed} />}
                keyExtractor={(book) => book.id}
                data={props.books}
            />
        </View>
    );

}