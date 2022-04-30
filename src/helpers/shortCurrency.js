import { Currency } from "./variables";

const shortCurrency = (currency) => {
  switch (currency) {
    case Currency.RUB:
      return "₽";
    case Currency.EUR:
      return "€";
    case Currency.GBP:
      return "£";
    case Currency.USD:
      return "$";
    default:
      return "";
  }
};

export default shortCurrency;
