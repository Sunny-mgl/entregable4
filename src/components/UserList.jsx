import axios from 'axios';
import React, { useEffect } from 'react';

const UserList = ({ userList, update, getUsers }) => {


const deteletUser = (user) => {
  axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
  .then(res => getUsers())
}


  const usersListOrd = userList.sort((a,b) => a.name?.localeCompare(b.name));


  return (
    <div className='users-list' style={{
      backgroundImage: `url(https://cdn.pixabay.com/photo/2013/08/28/12/03/plumage-176723_960_720.jpg)`,
    }}>
      
      <h1>Users</h1>
      <ul>
        {
          userList?.map(user => (
            <li key={user.id}>
              <div className='users-card'>
                <div className='users-information'>

                  <h2>{user.first_name} {user.last_name}</h2>
                  <p>{user.email}</p>
                  <p>{user.password}</p>
                  <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>

                </div>
                
                <div className='users-button'>

                  <button className='edit-button' onClick={() => update(user)}>
                    <i className="fa-sharp fa-solid fa-pen"></i>
                  </button>
                  <button className='delete-button' onClick={() => deteletUser(user)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>

                </div>
                
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;