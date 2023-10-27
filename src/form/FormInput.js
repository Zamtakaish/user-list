import React, {useState} from 'react';
import styles from './FormInput.module.css'

function FormInput(props) {

    const [inputValue, setInputValue] = useState('')

    function onChangeHandler(event) {
        setInputValue(event.target.value)
    }

    return (
        <div className={styles['input-cluster']}>
            <label >{props.label}</label>
            <input type={props.type} value={inputValue} onChange={onChangeHandler}/>
        </div>
    );
}

export default FormInput;