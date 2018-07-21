import { createAction } from "redux-actions";
import { SET_FILTER, SET_MAP_INFO, SET_STASH_POINTS } from "./names";
import { makeQueries } from "./utils";

export const setFilter = createAction(SET_FILTER);
export const setMapInfo = createAction(SET_MAP_INFO);
export const setStashPoints = createAction(SET_STASH_POINTS);

//**************** ASYNC ACTIONS ******************************
const MAIN_ENDPOINT = "https://api-staging.stasher.com/v1/stashpoints";

export const fetchStashPoints = () => (dispatch, getState) => {
  const state = getState();
  const { filters } = state;
  const filterList = [];
  for (const key in filters) {
    if (filters[key] !== "") filterList.push(key);
  }
  const queries = makeQueries(filters, filterList);
  const endpoint = `${MAIN_ENDPOINT}${queries}`;
  fetch(endpoint)
    .then(res => res.json())
    .then(stashPoints => {
      dispatch(setStashPoints(stashPoints));
    });
};
