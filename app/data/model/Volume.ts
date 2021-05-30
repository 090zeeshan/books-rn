interface Volume {
    id: string;
    kind: string;
    volumeInfo: VolumeInfo;
}

interface VolumeInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: ImageLinks
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export default Volume;