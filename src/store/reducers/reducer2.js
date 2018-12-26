import * as actions from "../actions/actions"
import stateModifier from "../utility"

const initialState = {
    logic: false,
    name:""
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actions.TOGGLE :
        return {
            ...state,
            logic:!state.logic
        }
        case actions.SETNAME :
            return stateModifier(state,{name:action.value})
        default: return state;
    }
};

export default reducer;