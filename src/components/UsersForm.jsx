import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ getUsers,  update2, update }) => {

    const { handleSubmit, register, reset } = useForm()

useEffect(() => {
  if (update2 !== null){
    reset(update2)
  }
}, [update2])

    const upLoad = (data) => { 
     if(update2){
      axios.put(`https://users-crud.academlo.tech/users/${update2.id}/`,data)
      .then(res => { 
        getUsers()
        update()
    }) //es es para cuando quiera agregar no me siga reemplazando, si que añada otro
     
    } else {
     axios.post('https://users-crud.academlo.tech/users/', data) //el post y put lleva un body que en este caso es data
                .then(res => getUsers())
     }
    }

    return (
        <form onSubmit={handleSubmit(upLoad)}>
            <div className='container'>
                <div className='users-container'>
                    <h1>New user</h1>
                    <br />
                    <div className='names'>
                        <div className='user-container'>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text"
                                id='first_name'
                                required
                                {...register("first_name")}
                            />
                        </div>
                        <div className='user-container'>
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text"
                             required
                                id='last_name'
                                {...register("last_name")}
                            />
                        </div>
                    </div>
                    <div className='email'>
                        <div className='user-container'>
                            <label htmlFor="email">email</label>
                            <input type="text"
                             required
                                id='email'
                                {...register("email")}
                            />
                        </div>
                        <div className='user-container'>
                            <label htmlFor="password">Password</label>
                            <input type="password"
                             required
                                id='password'
                                {...register("password")}
                            />
                        </div>
                        <div className='user-container'>
                            <label htmlFor="birthday">Birthday</label>
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