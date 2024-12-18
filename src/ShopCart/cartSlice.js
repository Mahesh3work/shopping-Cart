import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    tempItems:[],
    totalPrice:0

};
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
          addToCart(state,action){
            const existingItem = state.items.find(item=> item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity+=1;
            }else{

                state.items.push({...action.payload,quantity:1})
            }
            state.tempItems = [...state.items];
            state.totalPrice=state.items.reduce( (sum,item) => sum+item.price * item.quantity,0);


          },

          increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
      
            if (item) {
              item.quantity += 1;
            }
      
            state.totalPrice = state.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
          },
          decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
      
            if (item) {
              if (item.quantity > 1) {
                console.log(item.quantity)
                item.quantity -= 1;
              } else {
                state.items = state.items.filter(item => item.id !== id);
              }
            }
      
            state.totalPrice = state.items.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            );
          },
          removeFromCart(state,action) {
             state.items = state.items.filter((i) => i.id != action.payload)
            // alert(`${action.payload}`)
            state.tempItems=[...state.items];
            state.totalPrice=state.items.reduce( (sum,item) => sum+item.price * item.quantity,0);
          },
        //   count(state,action) {
        //     state.totalPrice=state.items.reduce( (sum,item) => sum+item.price * item.quantity,0);
        //   }
    }
})

export const {addToCart ,decreaseQuantity,increaseQuantity,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;