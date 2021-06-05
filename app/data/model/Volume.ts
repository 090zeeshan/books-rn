interface Volume {
    id: string;
    kind: string;
    volumeInfo: VolumeInfo;
    isFavourite: boolean;
    isTBR: boolean;
}

interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: ImageLinks
    previewLink: string;
}

export interface DetailedVolumeInfo extends VolumeInfo {
    industryIdentifiers: IndustryIdentifier[];
    pageCount: number;
    printedPageCount: number;
    categories: string[];
    language: string;
    averageRating: number;

}

interface IndustryIdentifier {
    type: string;
    identifier: string;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}



export default Volume;

export const getAuthorsText: (book: Volume) => string = (book: Volume) => {
    if (!!!book.volumeInfo.authors) {
        return "";
    }

    let authorsText = "";
    book.volumeInfo.authors.map((item, index) => {
        if (index < book.volumeInfo.authors.length - 1) {
            authorsText += item + ", ";
        }
        authorsText += item;
    });

    return authorsText;
}

export const getCategoriesText: (book: Volume) => string = (book: Volume) => {
    let text = "";
    const detailedVolumeInfo = book?.volumeInfo as DetailedVolumeInfo;
    detailedVolumeInfo?.categories?.map((item, index) => {
        if (index < detailedVolumeInfo.categories.length - 1) {
            text += item + ", ";
        }
        text += item;
    });

    return text == "" ? "N/A" : text;
}

export const getThumbnailSrc = (book: Volume) => {
    const thumbnailUrl = book.volumeInfo?.imageLinks?.smallThumbnail || book.volumeInfo?.imageLinks?.thumbnail;
    return thumbnailUrl ? { uri: thumbnailUrl } : require('../../assets/img/book_placeholder.png');
}