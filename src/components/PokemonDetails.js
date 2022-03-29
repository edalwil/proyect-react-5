import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokemonDetails = () => {

      const navigate = useNavigate()

      const { id } = useParams()
      const [pokemon, setPokemon] = useState();

      // usuario vuelve a pagina principal
      const LogOut = () => {
            navigate("/character")
      }

      useEffect(() => {
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
      }, [id]);

 


      return (
            <div className='conteiner-pokemon-details'>
                  <button onClick={() =>LogOut()} ><i className="fas fa-sign-out-alt"></i></button>
                  <div className='conteiner-img'>
                  <img src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="" />
                  </div>
                  <div className='pokemon-select'>
                        <img src={pokemon?.sprites.other?.["official-artwork"]?.front_default} alt="" />
                        <div className='caracter-pokemon'>
                        <p><b>{pokemon?.weight}</b><br />weight</p>
                        <p><b>{pokemon?.height}</b><br />height</p>
                        </div>
                        <h2>{pokemon?.name}</h2>
                  </div>
                  <div className='conteiner-type-abilities'>
                  <div className='type'>
                        <h2>Type</h2>
                        <div>
                        <p>{pokemon?.types[0]?.type.name}</p>
                        <p>{pokemon?.types[1]?.type.name}</p>
                        </div>
                  </div>
                  <div className='abilities'>
                        <h2>Abilities</h2>
                        <div>
                              <p>{pokemon?.abilities[0]?.ability.name}</p>
                              <p>{pokemon?.abilities[1]?.ability.name}</p>
                              <p>{pokemon?.abilities[2]?.ability.name}</p>
                        </div>
                  </div>
                  </div>
                  <div className='stats-base'>
                        <h2>Stats Base</h2>
                        <div >
                              <p>hp  <b></b>{pokemon?.stats[0]?.base_stat}</p>
                              <p><b>attack  </b>{pokemon?.stats[1]?.base_stat}</p>
                              <p><b>defense </b>{pokemon?.stats[2]?.base_stat}</p>
                              <p><b>speed </b>{pokemon?.stats[5]?.base_stat}</p>
                        </div>
                  </div>
            </div>
      );
};

export default PokemonDetails;