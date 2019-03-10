const doHelloMsg = (msg) => {
    return {
        type: 'HELLO_MSG',
        payload: msg
    }
};

export {
    doHelloMsg
}