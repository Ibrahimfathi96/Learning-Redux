export default function cartReducer(state = [], action) {
  let tempState = [];
  switch (action.type) {
    case "cart/add":
      let found = false;
      for (let i = 0; i < state.length; i++) {
        let current = state[i];
        if (current.id == action.payload.id) {
          current.quantity++;
          console.log("quantity added successfully!");
          found = true;
        }
        tempState.push(current);
      }
      if (found) return tempState;
      action.payload.quantity = 1;
      console.log("quantity added successfully! 2");
      return [...state, action.payload];
    case "cart/remove":
      for (let i = 0; i < state.length; i++) {
        let current = state[i];
        if (current.id == action.payload.id) {
          current.quantity--;
        }
        if (current.quantity > 0) tempState.push(current);
      }
      return tempState;
    default:
      return state;
  }
}
