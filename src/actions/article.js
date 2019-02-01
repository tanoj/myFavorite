import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  FAVOURITE_ARTICLE_ADDED,
} from '../constants/ActionTypes';

const API_END_POINT = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_ARTICLE_REQUEST,
    })
    const URL = `${API_END_POINT}`;
    return fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: FETCH_ARTICLE_SUCCESS,
          articles: json.articles,
        })
      })
      .catch(error => {
        console.log('fetchQuestions  error - ', error)
        dispatch({
          type: FETCH_ARTICLE_FAILURE,
          error: error,
        })
      })
  }
}

export const favouriteArticle = article => {
  return (dispatch) => {
  dispatch({
    type: FAVOURITE_ARTICLE_ADDED,
    article
  })
 }
}
