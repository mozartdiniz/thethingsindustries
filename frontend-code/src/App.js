import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
        <Layout>
            <MainContainer />
        </Layout>
    );
  }
}

export default App;
