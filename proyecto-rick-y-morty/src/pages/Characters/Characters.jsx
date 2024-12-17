import { useState ,useEffect,useContext} from 'react';//traemos el metodo useContext para poder traerme el contexto de characters(toda la data que me dio la)
import {charactersContext}  from '../../context';

import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'



export default function Characters() {
    let [data,setData]=useState([])//crea un estado llamado data que de manera inicial es un array vacio

    let[dataCompleta,setDataCompleta]=useState([])

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
         setDataCompleta(infoAPI.results);//la info completa
         setData(infoAPI.results)//arranque con la info completa y luego se empiece a filtrar
     
     }

    const filtrar=(inputData)=>{

        //del inputData necesitamos la informacion de "checked" y "value"
        let pulsado=inputData.checked;//booleano

        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)


        //si esta pulsado aplicar el filtro
        if(pulsado){
            console.log(data);
            let nuevaLista;

            switch (filtroPulsado) {
                case "Character Alive":
                    nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                    break;

                case "Character Dead":
                    nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
                    break;

                case "Female":
                    nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
                    break;

                case "Male":
                    nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
                    break;

                case "Origin Unknown":
                    nuevaLista=data.filter((personaje)=>{return personaje.origin.name == "unknown" })
                    break;
                                  
            }
           setData(nuevaLista)//cambiando el estado por medio de su setter 
           
        }else{
            setData(dataCompleta)
        }
    
    }

  
     useEffect(()=>{
        mostrarData()
     },[])



    return(
        <div>
            <Navegation/>
            <h2 className='d-flex justify-content-start text-white m-4 text-primary text-opacity-25' >Filters</h2>

            <form className='row justify-content-around flex-wrap'>
                {
                    filterName.map((filter)=>{
                        return  <Filter key={filter} title={filter} filtar={filtrar}/>
                    })
                }  
            </form>
            <section className='container d-flex justify-content-center flex-wrap '>
            {
                //data.length-> la cantidad de personajes que tengo(largo del array data)
                data.length !== 0?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className='alert bg-success'>
                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
            }
                
            </section>      
        </div>

    )
}
//pagina de personajes 

//condicionales JS : if/else switch op.ternario 
//op.ternario -> sintaxis condicion? accion-true :accion-false

//Fragment

//operador ternario : condicion? accion-true :accion-false


//vamos a armar un contexto -> buscar la info a la API 1 sola vez(evitando que se llame a la api cada vez que se reproduce "Characters") y a crear un estado con la info completa 
//esa info completa la vamos a usar para "volver a atras" cuando se desmarque un checkbox

//BReak!! volvemos 21hs
