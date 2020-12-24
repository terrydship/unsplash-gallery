import HttpClient from "./HttpClient";
import PhotoModel from "../../model/PhotoModel";

/**
 * Photo resource, which extends the base http client.
 *
 * @author Terry Deng
 */
class UnsplashPhotoResource extends HttpClient {
    public constructor() {
        super('https://api.unsplash.com');
    }

    /**
     * Load a list of random photos using Unsplash API.
     * @param count Number of photos to be loaded
     */
    public getPhotoList = (count: number) => this.instance.get<PhotoModel[]>('/photos/random', {
        params: {
            client_id: this.accessKey,
            count: count
        }
    });
}

export default UnsplashPhotoResource;

