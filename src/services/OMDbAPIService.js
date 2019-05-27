class OMDbAPIService {
    constructor() {
        this._apiUrl = 'http://www.omdbapi.com/?apikey=34467848';
    }
    async searchMovieTitle(title) {
        const response = await fetch(this._apiUrl + '&s=' + title);
        const data = await response.json();
        return data;
    }
}
export default new OMDbAPIService();