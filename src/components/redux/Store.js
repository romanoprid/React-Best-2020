import { createStore } from "redux";
import reduxUtils from "./ReduxUtils";

const initialState = { orders: [], totalPrice: 0 };

const store = createStore(reduxUtils, initialState);

export default store;
