import {
    BlogActionTypes,
    ADD_ITEM_TO_BLOG,
    REMOVE_ITEM_FROM_BLOG,
    Blog,
  } from "./types";
  
  export function removeItemFromInventory(id: number): BlogActionTypes {
    return {
      type: REMOVE_ITEM_FROM_BLOG,
      payload: id, // Will only accept type: number
    };
  }
  
  export function addItemToBlog(item: Blog): BlogActionTypes {
    return {
      type: ADD_ITEM_TO_BLOG,
      payload: item, // Will only accept type: Item
    };
  }
  