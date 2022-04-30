import { getOperations } from '../../services/requestMock'

export const loadOperations = (id) => {
  return async (dispatch) => {
    dispatch(loadOperationsAction());
    await getOperations(id)
      .then((data) => dispatch(loadOperationsSuccess(data)))
      .catch(() => loadOperationsFailureAction());
  };
}

export const loadOperationsAction = () => ({ type: "LOAD_OPERATIONS" });

export const loadOperationsFailureAction = () => ({
  type: "LOAD_OPERATIONS_FAILURE",
});

export const loadOperationsSuccess = (payload) => ({
  type: "LOAD_OPERATIONS_SUCCESS",
  payload,
});
