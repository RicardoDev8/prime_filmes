
import AppRoutes from './routes';
import './index.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
    return(
        <div>
            <ToastContainer autoClose={3000} />
            <AppRoutes/>
        </div>
    );
}