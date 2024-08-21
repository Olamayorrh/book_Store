const CartReducer = (state, action)=>{
    switch(action.type){
        case "Add":
              return [...state,action.product]

        case "Remove":
             return state.filter(item => item.id !== action.id)

        case "Increase":
            const IndexI = state.findIndex(item => item.id === action.id)
            state[IndexI].quantity += 1
            return [...state]

        case "Decrease":
            const IndexA = state.findIndex(item => item.id === action.id)
            state[IndexA].quantity -= 1
            return [...state]

        default: state;
    }
};
export default CartReducer;