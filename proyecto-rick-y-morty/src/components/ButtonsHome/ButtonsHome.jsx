import './button.css'
import {Link} from 'react-router'//traigo a Link y le paso  en el atributo to, el valor de la url que coincide con la prop contenido

export default function ButtonsHome({contenido}) {

    return(
       
        <Link to={contenido} className="btn botonHome col-3 text-center ">{contenido}</Link>
    )
}