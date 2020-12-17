import { createAdded, deleteAdded, updateAdded } from "./Constants";

const changeItem = (state, action) => {
  let orders = state.orders.slice();
  let foundIndex = orders.findIndex(
      (element) => element.id === action.payload.id
  );
  orders[foundIndex] = action.payload;
  return orders;
};

const createItem = (state, action) => {
  let orders = state.orders.slice();
  orders.push(action.payload);
  return orders;
};

const deleteItem = (state, action) => {
  let orders = state.orders.slice();
  orders = orders.filter((element) => element.id !== action.payload.id);
  return orders;
};

const calculatePrice = (data) => {
  let sum = 0;
  for (let value of Object.values(data)) {
    sum += value.price_in_uah;
  }
  return sum;
};

const reduxUtils = (state = {}, action) => {
  let orders;
  switch (action.type) {
    case updateAdded:
      orders = changeItem(state, action);
      return {
        orders,
        totalPrice: calculatePrice(orders),
      };
    case createAdded:
      let foundIndex = state.orders.findIndex(
          (element) => element.id === action.payload.id
      );
      if (foundIndex !== -1) {
        orders = changeItem(state, action);
      } else {
        orders = createItem(state, action);
      }
      return {
        orders,
        totalPrice: calculatePrice(orders),
      };
    case deleteAdded:
      orders = deleteItem(state, action);
      return {
        orders,
        totalPrice: calculatePrice(orders),
      };
    default:
      return state;
  }
};

export default reduxUtils;