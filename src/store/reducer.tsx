import * as actionTypes from './actions';

export interface IState {
    counter: number;
}

export interface AppActions {
    type: string;
    number: number;
}

const initialState = {
    counter: 0
};

const reducer = (state: IState = initialState, action: AppActions): IState => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return {
                ...state,
                counter: state.counter + action.number
            }
        case actionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - action.number
            }
    }
    return state;
};

export default reducer;