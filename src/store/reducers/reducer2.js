import * as actions from "../actions/actions"

const initialState = {
    logic: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actions.TOGGLE :
        return {
            ...state,
            logic:!state.logic
        }
        
        
        default: return state;
    }
};

export default reducer;