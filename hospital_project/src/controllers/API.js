import axios from "axios";

class API {
  _AUTH_URL = "http://localhost:8000/auth";
  _VISIT_URL = "http://localhost:8000/visit";
  _post_AddNewUserUrl = `${this._AUTH_URL}/registration`;
  _post_AuthUserUrl = `${this._AUTH_URL}/authorization`;
  _get_AllVisitsUrl = `${this._VISIT_URL}/getAllVisits`;
  _post_addNewVisitsUrl = `${this._VISIT_URL}/addNewVisits`;
  _patch_updateVisitUrl = `${this._VISIT_URL}/updateVisit`;
  _delete_VisitUrl = `${this._VISIT_URL}/deleteVisit`;

  registration = async (login, password) => {
    return await axios.post(this._post_AddNewUserUrl, {
      login,
      password,
    });
  };

  authorization = async (login, password) => {
    return await axios.post(this._post_AuthUserUrl, {
      login,
      password,
    });
  };

  getAllVisits = async () => await axios.get(this._get_AllVisitsUrl);

  addNewVisit = async (visits) => {
    return await axios.post(this._post_addNewVisitsUrl, {
      visits,
    });
  };
}

export default new API();
