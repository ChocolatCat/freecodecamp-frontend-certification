
const markdownReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_MARKDOWN':
            return action.markdown;
        default:
            return state;
    }
}

export default markdownReducer;