import React from 'react';

import styles from './styles.css';

const IncrementButton = (props) => (
    (props.action) ? <button onClick={props.action} className={styles.IncrementButton}>Increment</button> : null
);

export default IncrementButton;
