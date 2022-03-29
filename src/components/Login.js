import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
      // userName guarda el valor de la imput 
      const [userName, setUserName] = useState("");
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const submit = e => {
            e.preventDefault()
            dispatch( {
                  type: "GET_USERNAME",
                  payload: userName
            })
            setUserName("")
            navigate("/character")
      }

      return (
            <>
                  <div className='trainer-container'>
                        <h1 className='title'>Hello trainer!</h1>
                        <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="trainer" />
                  </div>
                  <div className='container-login-button'>
                        <p className='p-title'>Give me your name to start</p>
                        <form onSubmit={submit}>
                              <input 
                                    type="text" 
                                    value={userName} 
                                    // onChange accion para dotonar un evento.
                                    onChange={e => setUserName(e.target.value)}
                                    required/>
                              <button>
                              <i className="fa-solid fa-paper-plane"></i>
                              </button>
                        </form>
                  </div>
            </>
      );
};

export default Login; 