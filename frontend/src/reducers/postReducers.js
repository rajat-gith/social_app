import {
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_FAIL,
  COMMENT_LIST_SUCCESS
} from "../constants/postConstants";

export const postListReducers = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] };
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload };
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postDetailReducers = (state = { posts: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state };

    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };

    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listCommentsReducers = (state = {comments:[]}, action) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return { loading: true, ...state };

    case COMMENT_LIST_SUCCESS:
      return { loading: false, comments: action.payload };

    case COMMENT_LIST_FAIL:
      return { loading: false, comments: action.payload };
    default:
      return state;
  }
};
