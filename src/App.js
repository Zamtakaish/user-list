import React, {useState} from 'react';
import styles from './App.module.css';
import UserForm from "./form/UserForm";
import UserList from "./list/UserList";


function App() {

    const [users, setUsers] = useState([]);

    function addUserHandler(user) {
        setUsers((users) => [...users, user])
    }

  return (
    <div className={styles.layout}>
        <UserForm addUser={addUserHandler}/>
        <UserList users={users}/>
    </div>
  );
}

export default App;
