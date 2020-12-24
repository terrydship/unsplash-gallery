interface URL {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
}

export default interface PhotoModel {
    alt_description: string,
    width: number,
    height: number,
    urls: URL
}