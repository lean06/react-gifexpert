import React from 'react'

export const GifItem = ({title, url}) => { //solo necesito obtener el title and url para poder mostrar un GIF. Por eso solo llamo y desestructuro esos dos

  return (
                   //react me obliga a poner className, no puedo usar class= ""
    <div className="card"> 

        <img src={url} alt={title}></img>
        <p>{title}</p>


    </div>

  )
}
