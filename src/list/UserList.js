import React from 'react';
import styles from './UserList.module.css'
import UserCard from "./UserCard";

function UserList(props) {

    if (props.users.length > 0){
        return (
            <div className={styles.list}>
                {props.users.map(element => {
                    return <UserCard name={element.name} age={element.age}/>
                })}
            </div>
        );
    }
}

export default UserList;