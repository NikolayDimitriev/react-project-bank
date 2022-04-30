import { getAccounts } from "../../services/requestMock";

export const loadAccounts = () => {
  return async (dispatch) => {
    dispatch(loadAccountsAction());
    await getAccounts()
      .then((data) => dispatch(loadAccountsSuccess(data)))
      .catch(() => dispatch(loadAccountsFailureAction()));
  };
};

export const loadAccountsAction = () => ({ type: "LOAD_ACCOUNTS" });

export const loadAccountsFailureAction = () => ({
  type: "LOAD_ACCOUNTS_FAILURE",
});

export const loadAccountsSuccess = (payload) => ({
  type: "LOAD_ACCOUNTS_SUCCESS",
  payload,
});

export const changeAccountTitle = (payload) => ({
  type: "CHANGE_ACCOUNT_TITLE",
  payload,
});

export const addAccount = (payload) => ({
  type: "ADD_ACCOUNT",
  payload,
});

export const removeExternalAccount = (payload) => ({
  type: "REMOVE_EXTERNAL_ACCOUNT",
  payload,
});
