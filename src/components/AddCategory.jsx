import { useState } from "react";

//ESTE COMPONENTE MANEJA EL INPUT


export const AddCategory = ( {onNewCategory} ) => {


    const [ inputValue, setInputValue ] = useState(''); //MANEJA EL ESTADO DEL INPUT - USE STATE
    

    const onInputChange = ( {target} ) => { //esta funcion se relaciona con el Onchange para que el input no sea readOnly. 
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; //esto significa que si el input que yo escribo tiene mas de 1 letra, entonces ahi si devolveme el resultado si no que no pase nada.
        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory(inputValue.trim()); //aca emito la nueva categoria limpia sin espacio adelante y atras
        setInputValue('');    


    }

 
    return ( //el default del form es refrescar la pagina cada vez que lo uso. Por eso uso el onSubmit, para evitar que todo se elimine
        <form onSubmit = {onSubmit}> 

            <input
            type="text"
            placeholder="Buscar Gifs"
            onChange={ onInputChange } //si no uso onChange, el value del input no se puede modificar y queda como readOnly. No me deja escribir practicamente. 
            >
            
            
            </input>

        </form>
        
    )
}