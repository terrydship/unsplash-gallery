import axios, {AxiosInstance} from 'axios';

/**
 * Base http client.
 *
 * @author Terry Deng
 */
abstract class HttpClient {
    protected instance: AxiosInstance;
    protected readonly accessKey: string;  // Unsplash API access key

    protected constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL: baseURL
        });
        this.accessKey = 'sbBH-nT3WqyiNaMsEjpDyof5Vq1cC4QiNwEGK0YvP4c';
    }
}

export default HttpClient;