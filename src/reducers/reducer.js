const initialState = {
    msg: 'Hello world'
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HELLO_MSG':
            return {
                ...state,
                msg: 'Hello ' + action.payload
            };
        default:
            return state
    }
};

export default reducer;