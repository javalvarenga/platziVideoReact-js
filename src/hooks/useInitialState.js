import { useState,useEffect } from 'react'

const useInitialState=(API)=>{
      // useState
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  
  useEffect(() => {
    //useEffects recibe una funcion como parametro
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
    }, []); //también recibe una propiedad para que no se repita[]
    return  videos
}

export default useInitialState
