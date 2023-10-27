import React, {useState} from 'react';
import styles from './UserForm.module.css';


function UserForm(props) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    function changeNameHandler(event) {
        setName(event.target.value);
    }
    function changeAgeHandler(event) {
        setAge(event.target.value);
    }

    function onSubmitHandler(event){
        event.preventDefault();
        if ((name !== '') && (age !== ''))
        props.addUser({name: name, age: age});
        else console.log('Error!')
    }

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <div className={styles['input-cluster']}>
                <label >Username</label>
                <input type='text' value={name} onChange={changeNameHandler}/>
            </div>
            <div className={styles['input-cluster']}>
                <label >Age (Years)</label>
                <input type='number' value={age} onChange={changeAgeHandler}/>
            </div>
            <button type='Submit' >Add user</button>
        </form>
    );
}

export default UserForm;