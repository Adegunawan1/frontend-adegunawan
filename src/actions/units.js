import {
  ADD_UNIT_REQUEST,
  DELETE_UNIT_REQUEST,
  FIND_UNIT_REQUEST,
  FIND_UNITS_REQUEST,
} from "./constants";

export function saveUnit(data) {
  return {
    type: ADD_UNIT_REQUEST,
    data: data,
  };
}

export function deleteUnitById(id) {
  return {
    type: DELETE_UNIT_REQUEST,
    id: id,
  };
}

export function findUnitById(id) {
  return {
    type: FIND_UNIT_REQUEST,
    id: id,
  };
}

export function findUnitAll() {
  return {
    type: FIND_UNITS_REQUEST,
  };
}
