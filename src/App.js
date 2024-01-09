import React, {useState} from 'react';
import styles from './App.module.css';
import UserForm from "./form/UserForm";
import UserList from "./list/UserList";
import Warning from "./warning/Warning";


function App() {

    const [users, setUsers] = useState([]);
    const [warning, setWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    function addUserHandler(user) {
        setUsers((users) => [...users, user])
    }

    function warningHandler(message) {
        setWarning(!warning);
        setWarningMessage(message);
    }

    if (warning) {
        return (
            <div className={styles.layout}>
                <Warning setWarning={warningHandler} message={warningMessage}/>
                <UserForm addUser={addUserHandler}/>
                <UserList users={users}/>
            </div>
        );
    }

  return (
    <div className={styles.layout}>
        <UserForm addUser={addUserHandler} setWarning={warningHandler}/>
        <UserList users={users}/>
    </div>
  );
}

export default App;
