/**
 * Photo Model, which maps the structure of what is returned from Unsplash API.
 *
 * @author Terry Deng
 */
export default interface PhotoModel {
    alt_description: string,
    width: number,
    height: number,
    urls: URL
}

interface URL {
    full: string,
    raw: string,
    regular: string,
    small: string,
    thumb: string
}