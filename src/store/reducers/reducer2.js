import * as actions from "../actions/actions"

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
        return {
            ...state,
            name:action.value
        }
        
        
        default: return state;
    }
};

export default reducer;