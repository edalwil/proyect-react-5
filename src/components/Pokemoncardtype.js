import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pokecard from './Pokecard';

const Pokemoncardtype = ({type}) => {

     const [pokemonType, setPokemonType] = useState([]);
     

//      const [page, setPage] = useState(1);
//       const intemsNumber = 20
//       const lastIndex = page * intemsNumber
//       const firsIndex = lastIndex - intemsNumber
//       const pokemonPaginated = pokemonType?.slice(firsIndex, lastIndex)
//       const totalpage = Math.ceil(pokemonType?.length / intemsNumber)

      useEffect(() => {
            axios.get(`https://pokeapi.co/api/v2/type/${type}`)
                  .then(res => {
                        setPokemonType(res.data?.pokemon)
                  })
      }, [type])

      return (      
            <>
            {/* <div className='page'>
                             <button onClick={() => setPage(page -1)} disabled={page <= 1}>
                                   pagina previa
                              </button>
                              {page} / {totalpage}
                             <button  onClick={() => setPage(page +1)} disabled={page > totalpage}>pagina siguiente</button>
                       </div> */}
                        {
                              pokemonType?.map(list => (
                                    <Pokecard key={list?.pokemon.name} pokeUrl={list?.pokemon.url}/>
                              ))
                        }
            </>
      );
};

export default Pokemoncardtype;