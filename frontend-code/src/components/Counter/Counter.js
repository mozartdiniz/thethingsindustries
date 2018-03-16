import React from 'react';

import styles from './styles.css';

const Counter = (props) => (
  <div className={styles.Counter}>
    <div className={styles.Value}>{props.value}</div>
  </div>
);

export default Counter;
