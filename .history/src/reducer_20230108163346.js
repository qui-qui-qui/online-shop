export function reducer(state, {type, payload}) {
    switch (type) {
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== itemId);
            }
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: ''
            }
        default: 
            return state;
    }
}