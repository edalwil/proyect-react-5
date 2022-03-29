import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pokecard from './Pokecard';
import Pokemoncardtype from './Pokemoncardtype';
import { Link } from 'react-router-dom';



const Pokedex = () => {

      const selecter = useSelector(state => state.userName)
      const navigate = useNavigate()
      const [onselecter, setSelecter] = useState(true);
      const [pokedexList, setPokedexList] = useState([]);
      const [pokemonType, setPokemonType] = useState([]);
      const [eventType, setEventType] = useState("All pokemons");
      const [onPokemon, setOnPokemon] = useState("");


      const [page, setPage] = useState(1);
      const intemsNumber = 20
      const lastIndex = page * intemsNumber
      const firsIndex = lastIndex - intemsNumber
      const pokemonPaginated = pokedexList?.slice(firsIndex, lastIndex)
      const totalpage = Math.ceil(pokedexList?.length / intemsNumber)

      
      // usuario vuelve a pagina principal
      const LogOut = () => {
            navigate("/")
      }

      const selecterpokemon = () => {
            setSelecter(!onselecter)
      }

      // solicitu(d a la api de pokemon
      useEffect(() => {
           axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")
                  .then(res => {
                       setPokedexList(res.data?.results)
                  })
      }, []);

      const type = () => {
            axios.get("https://pokeapi.co/api/v2/type/")
                  .then(res =>{
                        setPokemonType(res.data?.results)
                  })
      } 

      const onType =() => {
      if (eventType === "All pokemons" ) {
            return (
                  <>
                        {
                              pokemonPaginated?.map(list => (
                                    <Pokecard key={list.name} pokeUrl={list?.url} />
                              ))
                        }
                  </>
            )
      }else{
            return<Pokemoncardtype  type={eventType}  />    
      }}

  
      return (

            <div className='select-container'>
                  <button onClick={LogOut} ><i className="fas fa-sign-out-alt"></i></button>
                  <h1 className='title'>Pokedex</h1>
                  <p className='p-title'>welcome <b>{selecter}</b>, here you can find your favorite pokemon</p>
                  <div className='select'>
                        <span>type</span>
                        <input onClick={selecterpokemon} type="checkbox" />
                        <span>pokemon</span>
                  </div>
                  {
                        onselecter ? 
                        <div className='cointeiner-select-input'>
                        <select onClick={type} onChange={e => setEventType(e.target.value)}  name="pokemon-type"  >
                              <option value="All pokemons">All pokemons</option>
                              {
                                    pokemonType?.map( type => (
                                          <>
                                                <option >{type.name}</option>
                                          </>
                                    ))
                              }
                        </select>
                        </div>
                         : 
                              <Link to={`/character/${onPokemon}`}>
                                    <div className='search-conteiner'>
                                          <div className='box-input'>
                                                <input onChange={e => setOnPokemon(e.target.value)}  type="text"  id="check"/>
                                                <button onClick={() =>onPokemon}><i className="fas fa-search"></i></button>
                                          </div>
                                    </div>
                              </Link>
                  }
                  {
                       <div className='page'>
                        <button onClick={() => setPage(page -1)} disabled={page <= 1}>
                              pagina previa
                         </button>
                         {page} / {totalpage}
                        <button  onClick={() => setPage(page +1)} disabled={page > totalpage}>pagina siguiente</button>
                  </div>
                  }
                              
                        <div className='pokemon-card'> 
                              {
                                    onType()
                              }
                        </div>
            </div>
      );
};

export default Pokedex;