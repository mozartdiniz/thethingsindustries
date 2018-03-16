import React from 'react';

import styles from './styles.css';

const ErrorMessage = (props) => (
  <div className={styles.ErrorMessage}>{props.message.text}</div>
);

export default ErrorMessage;
