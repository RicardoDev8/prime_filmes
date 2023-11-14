import { useEffect, useState } from 'react';
import './favorite.css'
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'

export default function Favorite() {


    const [moviess, setMoviess] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem("@film")
        setMoviess(JSON.parse(myList) || [])
    }, [])

    function removeFilm(id){
        let movieFilter = moviess.filter((item)=>{
            return(item.id !== id)
        })

        setMoviess(movieFilter);
        localStorage.setItem("@film", JSON.stringify(movieFilter))
        toast.success("O filme foi removido com sucesso")
    }


    return (
        <div className='my-movies' >
            <h1>Meus filmes</h1>

            <ul>
                {
                    moviess.map((item) => {
                        return (
                            <div>
                            <li key={item.id} >
                                <span>{item.title}</span>
                                
                                <div>
                                    <Link className='special-button' to={`/movies/${item.id}`} >Acessar detalhes</Link>
                                    
                                    <button className='special-button' onClick={()=> removeFilm(item.id)} >Excluir</button>
                                </div>
                            </li>
                            
                            <Link to='/' className='special-button' >Voltar</Link>

                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}