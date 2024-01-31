
export const getGifs = async(category) => { //si uso fetch, necesito que mi funcion sea async

    const url = `https://api.giphy.com/v1/gifs/search?api_key=zUyKMqiNUZP55W7ii39nx9G3xdfByFJ8&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json(); //aqui desestructuro la data del url. La data es lo que me importa obtener porque ahi estan los gifs. 
    //es data.map porque la data dentro de la website en el json es un arreglo. 
    const gifs = data.map(img => ({
  
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url //todo estas propiedades las obtengo del json.
    }));
  
    return gifs;
  
  }
  
  