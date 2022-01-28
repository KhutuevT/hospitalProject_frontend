const defaultState = {
  visits: [],
  filterVisits: [],
};

const ADD_VISITS = "ADD_VISITS";
const GET_VISITS = "GET_VISITS";
const ADD_FILTER_VISITS = "ADD_FILTER_VISITS";
const GET_FILTER_VISITS = "GET_FILTER_VISITS";

export const visitsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_VISITS:
      return { ...state, visits: action.payload };
    case GET_VISITS:
      return state.visits;
    case ADD_FILTER_VISITS:
      return { ...state, filterVisits: action.payload };
    case GET_FILTER_VISITS:
      return state.filterVisits;
    default:
      return state;
  }
};

export const addVisitAction = (payload) => ({ type: ADD_VISITS, payload });
export const getVisitAction = (payload) => ({ type: GET_VISITS, payload });
export const addFilterVisitAction = (payload) => ({
  type: ADD_FILTER_VISITS,
  payload,
});
export const getFilterVisitAction = (payload) => ({
  type: GET_FILTER_VISITS,
  payload,
});
