import axios from "axios";
import { GET_ALL_CUISINES_API } from "../constants/backend";
import {
  FETCH_CUISINES_REQUEST,
  FETCH_CUISINES_SUCCESS,
  FETCH_CUISINES_FAILURE,
} from "../constants/cuisineActionConstants";

export const listCuisines = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CUISINES_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(GET_ALL_CUISINES_API, config);

    dispatch({
      type: FETCH_CUISINES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CUISINES_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
