import HttpClient from "./HttpClient";
import PhotoModel from "../../model/PhotoModel";

class UnsplashPhotoResource extends HttpClient {

    public constructor() {
        super('https://api.unsplash.com');
    }

    /**
     * Load the photo list using Unsplash API.
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

