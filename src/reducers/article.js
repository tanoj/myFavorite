import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
} from '../constants/ActionTypes'


const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ARTICLE_SUCCESS:
    const items = action.articles && action.articles.map((item, index) => {
      item.id = index+1;
      return item;
    });
      return {
        ...state,
        isLoading: false,
        items,
      };
    case FETCH_ARTICLE_FAILURE: 
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
