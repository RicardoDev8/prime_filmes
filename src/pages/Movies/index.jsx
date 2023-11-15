import { useEffect, useState} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import api from '../../services/api';
import './movies.css';
import {toast} from 'react-toastify';

export default function Movies(){

    const {id} = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
   

    useEffect(()=>{

        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:'0e71b426753039fa3e3d64ea85252981',
                    language:'pt-BR'
                }
            })
            .then((resposta)=>{
                setMovie(resposta.data)
                setLoading(false)
            })
            .catch(()=>{
                useNavigate("/", { replace: true });
                return;
            })
        }

        loadMovie();

    }, [navigate, id])


    function saveFilm(){
        const minhaLista = localStorage.getItem('@film')

        let filmSaved = JSON.parse(minhaLista) || [];

        const hasFilm = filmSaved.some((moviesSaved)=> moviesSaved.id === movie.id);

        if(hasFilm){
            toast.warn("Este filme já está na sua lista!")
            return;
        }

        filmSaved.push(movie);
        localStorage.setItem('@film', JSON.stringify(filmSaved));
        toast.success("Filme salvo com sucesso!")
    }

    if(loading){
        return(
            <div>
                <h1>Carregando detalhes...</h1>
            </div>
        );
    }


    return(
        <div className='details-movies' >
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
            <span>{movie.overview}</span>
            <span>Avaliação: {movie.vote_average} / 10</span>

            <div className='info-buttons' >
                <button className='special-button' onClick={saveFilm} >Salvar</button>
                <button className='special-button' >
                    <a target='_blank' href={`https://youtube.com/results?search_query=${movie.title} Trailer`} >Treiler</a>
                </button>
                <Link className='special-button' to='/' >Voltar</Link>
            </div>
        </div>
    );
}