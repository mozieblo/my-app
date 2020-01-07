import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { IState, AppActions } from '../store/reducer';
import { Dispatch } from 'redux';

interface IDescriptionProps {
  countBy?: number;
  increaseNumber: typeof actionCreators.increase;
  decreaseNumber: typeof actionCreators.decrease;
  counter: number;
}

interface IDescriptionState {
  userNumber: number;
}

class Description extends Component<IDescriptionProps, IDescriptionState> {
 static defaultProps: Partial<IDescriptionProps> = {
    countBy: 1,
  };

  state: IDescriptionState = {
    userNumber: 0
  };

  setUserNumber = (e: any) => {
    const userNumber: number = parseInt(e.target.value);
    this.setState({ userNumber });
  };

  render() {
    const { increaseNumber, decreaseNumber, counter } = this.props;
    return (
      <div>
        <p>My favorite number is {counter}</p>
        <input type="text" placeholder="Podaj liczbę" onChange={this.setUserNumber}></input>
        <button onClick={() => increaseNumber(this.state.userNumber)}>Increase</button>
        <button onClick={() => decreaseNumber(this.state.userNumber)}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions> ) => {
  return {
    increaseNumber: (num: number) => dispatch(actionCreators.increase(num)),
    decreaseNumber: (num: number) => dispatch(actionCreators.decrease(num)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description);