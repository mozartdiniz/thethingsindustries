import React from 'react';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './styles.css';

const ErrorList = (props) => (
  (props.errors && props.errors.length)
    ? <div className={styles.ErrorList}>
        { props.errors.map((error) => <ErrorMessage message={error} key={error.code} />) }
      </div>
    : null
);

export default ErrorList;
