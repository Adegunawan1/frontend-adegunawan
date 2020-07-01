import {
  watchFindUnitAll,
  watchFindUnitById,
  watchDeleteUnitById,
  watchSaveUnit,
} from "./units";

import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    fork(watchFindUnitAll),
    fork(watchFindUnitById),
    fork(watchDeleteUnitById),
    fork(watchSaveUnit),
  ]);
}
