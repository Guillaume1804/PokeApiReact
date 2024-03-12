import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ImgRendering from './img.jsx'


function App() {
  const [AllPokemon, setAllPokemon] = useState([]);

  const fetchPokemon = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
    const dataJSON = data.data.results;

    setAllPokemon(dataJSON)
    console.log(dataJSON)
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  return (
      <div>
        {
          AllPokemon.map((element) => {
            return <>
              <p>{element.name}</p>
              <ImgRendering url={element.url} />
            </>
          })
        }
      </div>
  )
}

export default App;
