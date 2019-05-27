class OMDbAPIService {
    constructor() {
        this._apiUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;
    }
    async searchMovieTitle(title) {
        const response = await fetch(this._apiUrl + '&s=' + title);
        const data = await response.json();
        return data;
    }
    async getMovieByID(id) {
        const response = await fetch(this._apiUrl + `&plot=full&i=${id}`);
        const data = await response.json();
        return data;
    }
}
export default new OMDbAPIService();