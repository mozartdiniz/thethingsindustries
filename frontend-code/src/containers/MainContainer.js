import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/index';

import { generateErrorMessage } from '../utils/socket';

import Socket from '../hoc/Socket/Socket';

import IncrementButton from '../components/Incrementbutton/IncrementButton';
import Counter from '../components/Counter/Counter';
import ErrorList from '../components/ErrorList/ErrorList';

class MainContainer extends Component {
  componentDidMount() {
    this.props.socket.onmessage = (e) => this.props.saveNewNumber(e.data);
    this.props.socket.onerror = (e) => this.props.addErrorMessage({
      code: 0,
      text: 'Websocket server is not available',
    });
    this.props.socket.onclose = (e) => this.props.addErrorMessage({
      code: e.code,
      text: generateErrorMessage(e),
    });
  }

  render() {
    return (
        <div>
            <Counter value={this.props.counter} />
            <IncrementButton action={this.props.requestNewNumber} />
            <ErrorList errors={this.props.errors} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.number,
    errors: state.error.errorMessages
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestNewNumber: () => dispatch(actions.requestNewNumber()),
    saveNewNumber: (number) => dispatch(actions.saveNumber(number)),
    addErrorMessage: (message) => dispatch(actions.addErrorMessage(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Socket(MainContainer));
