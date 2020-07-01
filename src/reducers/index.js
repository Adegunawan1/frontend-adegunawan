import { combineReducers } from "redux";
import { addedUnit, deletedUnit, UnitById, Units } from "./units";

export default combineReducers({
  UnitById,
  Units,
  deletedUnit,
  addedUnit,
});
