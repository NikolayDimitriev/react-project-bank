import React from "react";

import shortCurrency from "../../helpers/shortCurrency.js";

const Money: React.FC<any> = ({ value = 0, currency }) => {
  const mask = shortCurrency(currency);
  const breakValue = value.toString().split(".");

  const integerPart = breakValue[0] !== "0" ? breakValue[0] : "";
  const decimalPart = breakValue[1] ? <span>,{breakValue[1]}</span> : "";
  const currencePart = currency ? <span>{mask}</span> : "";

  return integerPart !== "" ? (
    <span>
      <span>{integerPart}</span>
      {decimalPart}
      {currencePart}
    </span>
  ) : (
    <></>
  );
};

export default Money;
