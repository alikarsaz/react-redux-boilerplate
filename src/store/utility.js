const stateModifier = (oldState, modification) =>{
    return {
        ...oldState,
        ...modification
    }
}
export default stateModifier;