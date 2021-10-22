const TODO_LIST2_INPUT_ITEM = 'TODO_LIST2_INPUT_ITEM';


const defaultState = {
    listItems: [
        {id: 1, text: 'aaaaaaaaa'},
        {id: 2, text: 'bbbbbbbbb'},
        {id: 3, text: 'ccccccccc'}
    ],
    item_text: '',
    item_id: '',
};

export const testReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TODO_LIST2_INPUT_ITEM:  return {...state, item_text: action.payload}

        default:
            return state;
    }
}

export const inputText = (val) =>({type: TODO_LIST2_INPUT_ITEM, payload: val});


