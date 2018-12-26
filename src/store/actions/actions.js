export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const SETNAME = "SETNAME"

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (value) => ({ type: ADD, value: value });
export const syncToggle = () => ({ type: TOGGLE });
export const setName = (name) => ({ type: SETNAME, value:name });

export const fetchName = () => (
    dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                dispatch(setName(myJson.title))
            });
    });
export const toggle = () =>(
    dispatch => {
        setTimeout (()=>{
            dispatch(syncToggle());},1000)
    });
