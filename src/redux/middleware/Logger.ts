const Logger = (state) => (next) => action => {
    console.log('current state =>', state.getState());
    console.log('action', action);
    console.log('next =>', next(action));
}

export default Logger;