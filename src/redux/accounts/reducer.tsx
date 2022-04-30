interface Accounts {
  id: number;
  type?: string;
  amount?: number;
  currency?: string;
  title?: string;
  customTitle?: string;
}

const reducer = (accounts: Accounts[] = [], action) => {
  switch (action.type) {
    case "LOAD_ACCOUNTS":
      return null;
    case "LOAD_ACCOUNTS_FAILURE":
      return null;
    case "LOAD_ACCOUNTS_SUCCESS":
      return action.payload;
    case "CHANGE_ACCOUNT_TITLE":
      return accounts.map((account) => {
        if (account.id === action.payload.id) {
          return { ...account, ...action.payload };
        }
        return account;
      });
    case "ADD_ACCOUNT":
      return [...accounts, action.payload];
    case "REMOVE_EXTERNAL_ACCOUNT":
      return accounts.filter(
        (account) =>
          account.id !== action.payload.id || account.type !== "external"
      );
    default:
      return accounts;
  }
};

export default reducer;
