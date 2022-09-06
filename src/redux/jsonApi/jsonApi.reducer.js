import {
  ADD_POST,
  DELETE_POST,
  SAVE_API_DATA,
  UPDATE_POST,
} from "./jsonApi.types";

const INITIAL_STATE = {
  data: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_API_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_POST: {
      const posts = state.data;
      const id = action.payload.id;
      let newPosts = posts.filter((post) => post.id !== parseInt(id));
      return {
        ...state,
        data: newPosts,
      };
    }
    case ADD_POST: {
      let newPosts = state.data;
      const id = state.data.length;
      const { userId, title, body } = action.payload;
      console.log(newPosts);
      newPosts.unshift({ userId: parseInt(userId), title, body, id: id });
      return {
        ...state,
        data: newPosts,
      };
    }
    case UPDATE_POST: {
      const posts = state.data;
      const updatePost = action.payload;
      let newPosts = posts.map((post) => {
        if (post.id === updatePost.id) {
          return updatePost;
        } else {
          return post;
        }
      });
      return {
        ...state,
        data: newPosts,
      };
    }
    default:
      return state;
  }
};

export default reducer;
