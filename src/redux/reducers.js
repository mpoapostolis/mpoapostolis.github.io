import { combineReducers } from "redux";
import merge from "ramda/src/merge";
import { SET_STASH_POINTS, SET_FILTER, SET_MAP_INFO } from "./names";

const initMapInfo = {
  lat: 41.51697297211581,
  lng: 8.721058379009719
};

const mapInfo = (state = initMapInfo, { type, payload }) => {
  switch (type) {
    case SET_MAP_INFO:
      return merge(state, payload);
    default:
      return state;
  }
};

const initFilters = {
  active: "",
  twentyfour_seven: "",
  open_late: "",
  centre_lat: "",
  centre_lon: "",
  min_capacity: 20,
  by_distance: "",
  nearby_radius: 500,
};

const filters = (state = initFilters, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return merge(state, payload);
    default:
      return state;
  }
};

const initStashPoints = [];

const stashPoints = (state = initStashPoints, { type, payload }) => {
  switch (type) {
    case SET_STASH_POINTS:
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  stashPoints,
  filters,
  mapInfo
});

export default rootReducer;
