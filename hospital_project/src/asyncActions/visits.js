import API from "../controllers/API";
import { addVisitAction, addFilterVisitAction } from "../store/visitsReducer";

export const getVisits = () => {
  return async (dispatch) => {
    await API.getAllVisits().then((res) => {
      dispatch(addVisitAction(res.data.data));
      dispatch(addFilterVisitAction(res.data.data));
    });
  };
};
