export const reducer = (state, action) => {
   
       if (action.type === "REMOVE_ITEM") {
        return {
          ...state,
          item: state.item.filter((curElem) => {
            return curElem.imdbID !== action.payload;
          }),
        };
      }
    
  
    if (action.type === "CLEAR_CART") {
        localStorage.removeItem("cart"); 
        
        return {
            ...state,
            item: [],
            totalItems: 0,
            totalAmount: 0,
          };
  
        }
    if (action.type === "GET_TOTAL") {
        if (state.item.length === 0) {
          return { ...state, totalItems: 0, totalAmount: 0 };
        }
    
        let totalItems = state.item.length; // Count the number of items in the cart
    
        let totalAmount = state.item.reduce((accum, curVal) => {
          return accum + curVal.price; // Sum up the prices of all items
        }, 0);
      return { ...state, totalItems, totalAmount };
    }
    if (action.type === "SET_CART") {
        return { ...state, item: action.payload };
      }
    
    return state;
  };