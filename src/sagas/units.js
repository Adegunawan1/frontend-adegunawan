import {
  ADD_UNIT_REQUEST,
  ADD_UNIT_SUCCESS,
  ADD_UNIT_FAILURE,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  DELETE_UNIT_FAILURE,
  FIND_UNIT_REQUEST,
  FIND_UNIT_SUCCESS,
  FIND_UNIT_FAILURE,
  FIND_UNITS_REQUEST,
  FIND_UNITS_SUCCESS,
  FIND_UNITS_FAILURE,
} from "../actions/constants";
import { commonAxios } from "../utils/apiUtil";
import { put, takeLatest } from "redux-saga/effects";

function* saveUnit(action) {
  const { id, firstName, lastName, age, photo } = action.data;

  try {
    const data = yield id
      ? commonAxios.put(`contact/${id}`, {
          firstName,
          lastName,
          age,
          photo,
        })
      : commonAxios.post(`contact`, { firstName, lastName, age, photo });
    yield put({
      type: ADD_UNIT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: ADD_UNIT_FAILURE,
      error: error,
    });
  }
}

function* deleteUnitById({ id }) {
  try {
    const data = yield commonAxios.delete(`contact/${id}`);
    yield put({
      type: DELETE_UNIT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: DELETE_UNIT_FAILURE,
      error: error,
    });
  }
}

function* findUnitAll() {
  try {
    const data = yield commonAxios.get("contact");
    yield put({
      type: FIND_UNITS_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_UNITS_FAILURE,
      error: error,
    });
  }
}

function* findUnitById(action) {
  try {
    const data = yield commonAxios.get(`contact/${action.id}`);
    yield put({
      type: FIND_UNIT_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({
      type: FIND_UNIT_FAILURE,
      error: error,
    });
  }
}

export function* watchFindUnitAll() {
  yield takeLatest(FIND_UNITS_REQUEST, findUnitAll);
}
export function* watchFindUnitById() {
  yield takeLatest(FIND_UNIT_REQUEST, findUnitById);
}
export function* watchDeleteUnitById() {
  yield takeLatest(DELETE_UNIT_REQUEST, deleteUnitById);
}
export function* watchSaveUnit() {
  yield takeLatest(ADD_UNIT_REQUEST, saveUnit);
}
