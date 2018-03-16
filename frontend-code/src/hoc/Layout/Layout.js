import React, { Component } from 'react';

import styles from './styles.css';

class Layout extends Component {
    render() {
        return(
            <div className={styles.Layout}>
                { this.props.children }
            </div>
        );
    }
}

export default Layout;
