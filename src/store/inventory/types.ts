export interface Blog {
    id: number;
    name: string;
  }
  
  export interface BlogState {
    items: Blog[];
  }
  
  // Action "names" or types.
  export const REMOVE_ITEM_FROM_BLOG = "REMOVE_ITEM_FROM_BLOG";
  export const ADD_ITEM_TO_BLOG = "ADD_ITEM_TO_BLOG";
  
  // Define action requirements.
  
  interface RemoveItemFromBlog {
    type: typeof REMOVE_ITEM_FROM_BLOG;
    payload: number; // This will match our Item ID.
  }
  
  interface AddItemToBlog {
    type: typeof ADD_ITEM_TO_BLOG;
    payload: Blog; // We need to pass a new Item that should be added to our store. }
  }
  
  export type BlogActionTypes = RemoveItemFromBlog | AddItemToBlog;
  