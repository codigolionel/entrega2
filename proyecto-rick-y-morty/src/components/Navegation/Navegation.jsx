import './nav.css';
import { Link } from 'react-router'


export default function Navegation() {
    return (
        <nav className='d-flex justify-content-between p-5 '>

            <h4><Link to="/">Rick & Morty</Link></h4>
            <ul className='d-flex justify-content-between p-1 flex-wrap'>
                <button className='btn botonHome rounded-3 text-white '><Link to="/Characters ">Characters</Link></button>
                <button className='btn botonHome rounded-3 text-white '><Link to="/Contact">Contact</Link></button>
            </ul>
        </nav>
    )
}