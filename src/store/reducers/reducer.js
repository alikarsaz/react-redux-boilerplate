import * as actions from "../actions"

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actions.INCREMENT :
        return {
            counter: state.counter + 1
        }
        case actions.ADD :
        return {
            counter: state.counter + action.value
        }
        case actions.DECREMENT :
        return {
            counter: state.counter - 1
        }
        default: return state;
    }
};

export default reducer;