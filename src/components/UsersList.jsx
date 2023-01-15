import React from 'react';

const UsersList = ({ usersList, buttonSelect }) => {
    return (
        <div>
            <ul>
                {
                    usersList?.map(user => (
                        <li key={user.id}>
                            <div className='card'>
                                <h2>{user.first_name} {user.last_name}</h2>
                                <p>{user.email}</p>
                                <p>{user.password}</p>
                                <p><i class="fa-solid fa-cake-candles"></i> {user.birthday}</p>

                                <button onClick={() => buttonSelect(user)}>
                                    <i class="fa-regular fa-pen"></i>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;