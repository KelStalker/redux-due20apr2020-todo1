import {
    BlogState,
    REMOVE_ITEM_FROM_BLOG,
    ADD_ITEM_TO_BLOG,
    BlogActionTypes,
} from "./types";


// Set up a default or "initial" state for our app.
const initialState: BlogState = {
    items: [
        {   id: 1,
            blogPost: "Blog post 1",
        },
        {   id: 2,
            blogPost: "Blog post 2",
        },
        {   id: 3,
            blogPost: "Blog post 3",
        },
        {   id: 4,
            blogPost: "Blog post 4",
        },
    ],
};

// Now to set up our reducer / functionality!
export function blogReducer(
    state = initialState,
    action: BlogActionTypes
) {
    switch (action.type) {
        case REMOVE_ITEM_FROM_BLOG:
            return {
                ...state,
                // Filter through, and return the array WITHOUT the matching ID.
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case ADD_ITEM_TO_BLOG:
            return {
                ...state,
                // Add one new item onto the end of our array!
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
}
