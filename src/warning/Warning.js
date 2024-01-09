import React from 'react';
import styles from './Warning.module.css';

function Warning(props) {

    function clickHandler() {
        props.setWarning();
    }

    return (
        <div className={styles.warning_base}>
            <div className={styles.warning_message}>
                <div className={styles.warning_title}>Invalid input</div>
                <div className={styles.warning_description}>{props.message}</div>
                <button type="button" onClick={clickHandler}>Ok</button>
            </div>
        </div>
    );
}

export default Warning;