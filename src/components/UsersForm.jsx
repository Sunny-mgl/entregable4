import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers,  update2, update }) => {

    const { handleSubmit, register, reset } = useForm()

    const emptyForm = {first_name: '', last_name: '', email: '', password: '', birthday: '' }

useEffect(() => {
  if (update2){
    reset(update2)
  }else {
    reset(emptyForm)
  }
}, [update2])

    const upLoad = (data) => { 
     if(update2){
      axios.put(`https://users-crud.academlo.tech/users/${update2.id}/`,data)
      .then(() => { 
        getUsers()
        update()
    }) //es es para cuando quiera agregar no me siga reemplazando, si que añada otro
     
    } else {
     axios.post('https://users-crud.academlo.tech/users/', data) //el post y put lleva un body que en este caso es data
                .then(() => {
                    getUsers()
                    reset(emptyForm)
                });
     }
    }

    return (
        <form onSubmit={handleSubmit(upLoad)}>
            <div className='container'>
                <div className='users-container'>
                    <h1>New user</h1>
                    <br />
                    <div className='names-container'>
                        <i className="fa-solid fa-user"></i>
                        <div className='name'>
                            <label htmlFor="first_name"></label>
                            <input type="text"
                            placeholder='First name'
                                id='first_name'
                                required
                                {...register("first_name")}
                            />
                        </div>
                        <div className='last-name'>
                            <label htmlFor="last_name"></label>
                            <input type="text"
                            placeholder='Last name'
                            required
                                id='last_name'
                                {...register("last_name")}
                            
                            />
                        </div>
                            
                        
                        {/* <div className='user-container'>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text"
                             required
                                id='last_name'
                                {...register("last_name")}
                            />
                        </div> */}
                    </div>
                    <div className='mail-container'>
                        <i className="fa-solid fa-envelope"></i>
                        <div className='user-container'>
                            <label htmlFor="email"></label>
                            <input type="text"
                            placeholder='Email'
                             required
                                id='email'
                                {...register("email")}
                            />
                        </div>
                    </div>    
                    <div className='password-container'>
                        <i className="fa-solid fa-lock"></i>
                        <div className='user-container'>
                        
                            <label htmlFor="password"></label>
                            <input type="password"
                            placeholder='Password'
                             required
                                id='password'
                                {...register("password")}
                            />
                        </div>
                    </div>
                    <div className='birthday-container'>
                        <i className="fa-solid fa-cake-candles"></i>
                        <div className='user-container'>
                            <label htmlFor="birthday"></label>
                            <input type="date"
                             required
                                id='birthday'
                                {...register("birthday")}
                            />
                        </div>
                    </div>    
                        
                    
                    <button> Upload </button>
                    {/* como estamos trabajando con formulario no utilizamos onClick */}
                </div>
            </div>
        </form>
    );
};

export default UsersForm;