import { Currency, Type } from "./variables";

const getWeigthCurrency = (elem) => {
  switch (elem.currency) {
    case Currency.RUB:
      return 10;
    case Currency.USD:
      return 9;
    case Currency.EUR:
      return 8;
    default:
      return 7;
  }
};

const getWeigthType = (elem) => {
  switch (elem.type) {
    case Type.debit:
      return 10;
    case Type.credit:
      return 9;
    case Type.external:
      return 8;
    case Type.saving:
      return 7;
    default:
      return 6;
  }
};

const sortAccounts = (accounts) => {
  const accs = [...accounts];

  accs.sort((a, b) => {
    let weightA = 0;
    let weightB = 0;

    if (a.type === b.type) {
      weightA = getWeigthCurrency(a);
      weightB = getWeigthCurrency(b);
    } else {
      weightA = getWeigthType(a);
      weightB = getWeigthType(b);
    }

    return weightB - weightA;
  });

  return accs;
};

export default sortAccounts;
