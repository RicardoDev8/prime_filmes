
import axios from 'axios';


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;




//https://api.themoviedb.org/3/movie/now_playing?api_key=0e71b426753039fa3e3d64ea85252981&language=pt-BR