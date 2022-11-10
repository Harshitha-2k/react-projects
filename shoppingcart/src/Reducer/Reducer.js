 const CartItem = []

 const AddItems = (state= CartItem , action)=>{
    switch(action.type){
        case "AddToCart":
            return[
                ...state,
                {CartItem:action.playload}
            ]
            default :
            return state
    }
}
export default AddItems