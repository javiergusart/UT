import {
  FETCH_CUISINES_REQUEST,
  FETCH_CUISINES_SUCCESS,
  FETCH_CUISINES_FAILURE,
} from "../constants/cuisineActionConstants";

export const listCuisinesReducer = (state = { cuisines: [] }, action) => {
  switch (action.type) {
    case FETCH_CUISINES_REQUEST:
      return { loading: true, cuisines: [] };

    case FETCH_CUISINES_SUCCESS:
      return { loading: false, cuisines: action.payload };

    case FETCH_CUISINES_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const fetchCuisineDetailsReducer = (state = { cuisine: {} }, action) => {
  switch (action.type) {
    case FETCH_CUISINES_REQUEST:
      return { loading: true, ...state };

    case FETCH_CUISINES_SUCCESS:
      return { loading: false, cuisine: action.payload };

    case FETCH_CUISINES_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
