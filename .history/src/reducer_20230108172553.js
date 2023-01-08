export function reducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_BASKET': {
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                  ...payload,
                  quantity: 1,
                };
                newOrders = [...state.order, newItem];
              } else {
                newOrder = state.order.map((orderItem, index) => {
                  if (index === itemIndex) {
                    return {
                      ...orderItem,
                      quantity: orderItem.quantity + 1,
                    };
                  } else {
                    return orderItem;
                  }
                });
              }
              setAlertName(item.name);

              return {
                ...state, 
                order: newOrder
              }
        }
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id)
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