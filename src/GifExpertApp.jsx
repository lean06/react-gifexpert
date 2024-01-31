import {useState} from 'react';  
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//ESTE COMPONENTE MANEJA LAS CATEGORIAS

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Hola' ]);

    const onAddCategory = (newCategory) => {
            // setCategories(newCategory => [...newCategory, 'Valorant'])

            if (categories.includes(newCategory))return;

            setCategories ( [newCategory, ...categories] );
            
    }     
    
    return (
        <>  

            <h1>GifExpertApp</h1>

           
            <AddCategory 
            
                // setCategories= { setCategories }
                onNewCategory = { (value) => onAddCategory(value) }
                //onNewCategory es una propiedad de mi componente y se llama ON porque es un evento. Generalmente los eventos comienzan con on, onClick. 
            
            />

            
            {
                categories.map( (category) => //el .map me pide proporcionar una key y tirne que ser unica. Esto devuelve un objeto, es como decir esta funcion return lo que sigue
                        ( //aqui devuelvo mi componente como un obejto. es como si diria RETURN 
                        <GifGrid 
                        key= {category} 
                        category={category}
                        />
                    )
                )
            }

            
               
        
        </>
    )
}