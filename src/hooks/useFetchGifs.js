//ESTO ES MI CUSTOM HOOK. Comienzo con rafc, y luego devuelvo un objeto, return {}

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category); //aqui uso e importo mi funcion de java script
      setImages(newImages); //una vez que obtengo la respuesta, setea las nuevas imagenes
      setisLoading(false);

    }


    useEffect( () => {

      getImages();
      
    }, []) //esos [] significa que yo estoy dejanando mis dependencias vacias entonces el hook se ejecuta una sola vez con mi componente



  return { //aqui creo mi custom hook, haciendo devolver un objeto

    images,
    isLoading

  }
    
  
}
