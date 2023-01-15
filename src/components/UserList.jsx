import axios from 'axios';
import React, { useEffect } from 'react';

const UserList = ({ userList, update, getUsers }) => {


const deteletUser = (user) => {
  axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
  .then(res => getUsers())
}


  return (
    <div>
      <h1>Users</h1>
      <ul>
        {
          userList?.map(user => (
            <li key={user.id}>
              <div>
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>
                <p>{user.password}</p>
                <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
                <button onClick={() => update(user)}>
                  <i className="fa-sharp fa-solid fa-pen"></i>
                </button>
                <button onClick={() => deteletUser(user)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserList;