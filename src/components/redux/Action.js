import {
  updateAdded,
  createAdded,
  deleteAdded,
  resetAdded,
} from "./Constants";


export const updateItem = (item) => {
  return { type: updateAdded, payload: item };
};

export const createItem = (item) => {
  return { type: createAdded, payload: item };
};

export const deleteItem = (item) => {
  return { type: deleteAdded, payload: item };
};

export const resetItems = { type: resetAdded };
