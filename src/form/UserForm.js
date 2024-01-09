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
        if ((name !== '') && (age !== '') && (+age >= 0))
        props.addUser({name: name, age: age});
        else if ((name === '') && (age === '')){
            props.setWarning('Please, enter user\'s name and age.');
        }
        else if (name === ''){
            props.setWarning('Please, enter user\'s name.');
        }
        else if (age === ''){
            props.setWarning('Please, enter user\'s age.');
        }
        else if (+age < 0){
            props.setWarning('User\'s age should be a positive number.');
        }
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