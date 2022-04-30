import React from "react";
import cn from "classnames";

import Money from "../Money/Money";
import shortCurrency from "../../helpers/shortCurrency.js";

import styles from "./BoardItem.module.css";

/*
  Необходимо добавить вывод количества средств на счете пользователя (подключить компонент Money).
  Если счет имеет тип external (привязанная карта стороннего банка), то мы не можем знать остаток средств и не отображаем.
  Доработать отображение названия счета. Если у счета есть customTitle, то отображаем его, иначе - title.
*/

const BoardItem: React.FC<any> = ({
  type,
  amount,
  currency,
  title,
  customTitle,
}) => {
  return (
    <div className={styles.item}>
      <div className={cn(styles.logo, styles[`logo_${type}`])}>
        {shortCurrency(currency)}
      </div>
      <div className={styles[`item_text`]}>
        <div className={styles.title}>{customTitle ? customTitle : title}</div>
        {type !== "external" && <Money value={amount} currency={currency} />}
      </div>
    </div>
  );
};

export default BoardItem;
