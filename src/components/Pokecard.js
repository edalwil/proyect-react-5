import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Pokecard = ( {pokeUrl} ) => {

      const [pokeData, setPokeData] = useState();

      useEffect(() => {
            axios.get(pokeUrl)
                  .then(res => {
                              setPokeData(res.data)  
                  })
                  
      }, [pokeUrl, ]);

      return (
            <Link className='link' to={`/character/${pokeData?.id}`}>
                  <ul >
                              <div className="cardetails">
                                    <h4>{pokeData?.name}</h4>
                                    <li>types: {pokeData?.types[0]?.type.name}, {pokeData?.types[1]?.type.name}</li>
                                    <li>hp: {pokeData?.stats[0]?.base_stat}</li>
                                    <li>attack: {pokeData?.stats[1]?.base_stat}</li>
                                    <li>defense: {pokeData?.stats[2]?.base_stat}</li>
                                    <li>speed: {pokeData?.stats[5]?.base_stat}</li>
                              </div>
                              <img src={pokeData?.sprites.other?.["official-artwork"]?.front_default} alt="" />
                  </ul>
            </Link>
      );
};

export default Pokecard;