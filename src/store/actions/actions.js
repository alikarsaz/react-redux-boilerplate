export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const ADD = "ADD"
export const TOGGLE = "TOGGLE"

export const increment =() => ({type:INCREMENT});
export const decrement =() => ({type:DECREMENT});
export const add =(value) => ({type:ADD , value:value});
export const toggle =() => ({type:TOGGLE});