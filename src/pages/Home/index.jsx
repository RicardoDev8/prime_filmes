import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './home.css';


//Base da URL https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/movie/now_playing?api_key=0e71b426753039fa3e3d64ea85252981&language=pt-BR


export default function Home(){

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        async function loadMovies(){
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key:'0e71b426753039fa3e3d64ea85252981',
                    language:'pt-BR',
                    page:1
                }
            })

            console.log(response.data.results)
            setMovies(response.data.results.slice(0, 10))
            setLoading(false)
        }


        loadMovies();

    }, [])

    if(loading){
        return(
            <div>
                <h1>Carregando filmes...</h1>
            </div>
        );
    }

    return(
        <div className='containerHome' >
            <div className='list-movies' >
                {
                    movies.map((item)=>{
                        return(
                            <article key={item.id} >
                                <strong className='titulo' >{item.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} />
                                <Link className='botao' to={`/movies/${item.id}`} >Acessar</Link>
                                <span className='description' >{item.overview}</span>
                            </article>
                            
                        );
                    })
                }
            </div>
            
        </div>
    );
}