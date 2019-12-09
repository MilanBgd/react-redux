import React, { Component } from "react";
import { connect } from "react-redux";

// ACTIONS
const addAction = {
  type: "ADD"
};

const removeAction = {
  type: "REMOVE"
};

const addActionTen = {
  type: "ADD_TEN"
};

const removeActionTen = {
  type: "REMOVE_TEN"
};

const resetAction = {
  type: "RESET"
};

class CounterComponent extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p id="render-store">{counter}</p>
        <button onClick={() => dispatch(addAction)}>+</button>
        <button onClick={() => dispatch(removeAction)}>-</button>
        <button onClick={() => dispatch(addActionTen)}>+ 10</button>
        <button onClick={() => dispatch(removeActionTen)}>- 10</button>
        <button onClick={() => dispatch(resetAction)}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent);

export default CounterContainer;
