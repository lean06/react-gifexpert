//Este componente se encarga de mostrar una categoria con sus imagenes. 
import { GifItem } from "./gifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {

    const {images, isLoading} = useFetchGifs (category);


    return (

      <>
          <h3> {category} </h3>

          {
            isLoading && (<h2>Cargando... </h2>) //aqui digo, si el isloading es true? mostrar el cargando hasta que aparezcan las imagenes.

          }
            
          <div className="card-grid"> 
              {
                images.map((image ) => ( //gifitem es lo que me duvuelve como objeto implicito, es como decir return gifitem


                  <GifItem 
                  
                  
                  key={image.id}
                  {...image} //estos ... (que significa spread o esparcir) obtienen todas las otras propiedades del gifitem sin necesidad de yo ponerlas una por una, por ejemplo el title, el url, etc. 
                  //generalmente, esta tecnica se utiliza cuando lo que quiero traer tiene muchas propiedades, asi no llamo una por una
                  
                  
                  />


                ))

              }

          </div>


      </>
    
    )
  }
