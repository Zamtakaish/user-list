import React from 'react';
import styles from './UserCard.module.css';

function UserCard(props) {
    return (
        <div className={styles.card}>
            <p>{props.name}, </p>
            <p>{` ${props.age} years old`}</p>
        </div>
    );
}

export default UserCard;