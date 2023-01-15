import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import axios from 'axios'
import UsersList from './components/UserList'


function App() {

const [userList, setUserList] = useState ([])
const [update2, setUpdate2] = useState(null)

useEffect (() => {
axios.get("https://users-crud.academlo.tech/users/")
 .then(res => setUserList(res.data))
}, [])

//ayuda a reflejar los cambios sin necesidad de recargar
const getUsers = () => {
  axios.get("https://users-crud.academlo.tech/users/")
 .then(res => setUserList(res.data))
}

const update = (user) =>{
  setUpdate2(user)
}

console.log(userList)


  return (
    <div className="App">
      <UsersForm 
      getUsers={getUsers} 
      update2={update2} 
      update={update}/>
      <UsersList 
      userList={userList} 
      update= {update}/>
    </div>
  )
}

export default App
