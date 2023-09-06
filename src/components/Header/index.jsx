
import {Link} from 'react-router-dom';
import Favorite from '../../pages/Favorite';
import './header.css';

export default function Header(){
    return(
        <div className="container" >
            <Link className='titulo' to="/" >Prime Filmes</Link>
            <div className='links' >
                <Link to="/favorite" >Favoritos</Link>
                <Link>Contatos</Link>
            </div>
        </div>
    );
}