
interface Operations {
  title: string;
  date: number;
  amount: number;
  currency: string;
  id: number;
}

const reducer = (operations:Operations[] = [], action) => {
  switch (action.type) {
    case "LOAD_OPERATIONS":
      return null;
    case "LOAD_OPERATIONS_FAILURE":
      return null;
    case "LOAD_OPERATIONS_SUCCESS":
      return action.payload
    default:
      return operations;
  }
};

export default reducer;
