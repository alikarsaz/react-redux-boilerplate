import * as actions from "../actions/actions"
import stateModifier from "../utility"

const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case actions.INCREMENT :
            return stateModifier(state,{counter: state.counter + 1})
        case actions.ADD :
            return stateModifier(state,{counter: state.counter + action.value})
        case actions.DECREMENT :
            return stateModifier(state,{ counter: state.counter - 1})
        default: return state;
    }
};

export default reducer;