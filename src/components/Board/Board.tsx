import React from "react";
import { NavLink } from "react-router-dom";

import BoardItem from "../BoardItem/BoardItem";

import sortAccounts from "../../helpers/sortAccounts";

import styles from "./Board.module.css";

/**
 * Тебе нужно написать код реализации компонента Board в файле Board.ts
 *
 * Компонент Board
 * Пример использования: <Board accounts={[ account1, account2, ... ]} />
 * Параметр: accounts - неотсортированный массив аккаунтов
 * Не забудь про сортировку аккаунтов. Порядок следующий - дебетовые карты (debit) => кредитные (credit) => карты сторонних банков (external) => вклады (saving) => кредиты (loan)
 * Если есть несколько аккаунтов одного типа, то сортируем их по валюте RUB => USD => EUR => GBP
 */
/*
  *
    Необходимо реализовать возможность переключения между аккаунтами.
    Используй для этого компонент NavLink.

    Также необходимо добавить ссылку для перехода на страницу привязки карты стороннего банка
  */

const Board: React.FC<any> = ({ accounts }) => {
  const accs = accounts ? sortAccounts(accounts) : [];

  return (
    <div className={styles.board}>
      {accs.length ? (
        <>
          {accs.map((acc) => (
            <NavLink
              to={`/account/${acc.id}`}
              className={styles.link}
              activeClassName={styles.activeItem}
              key={acc.id + new Date() + Math.random() * 100}
            >
              <BoardItem
                key={acc.id}
                type={acc.type}
                amount={acc.amount}
                currency={acc.currency}
                title={acc.title}
                customTitle={acc.customTitle}
              />
            </NavLink>
          ))}
          <NavLink
            to="/actions/add_card"
            className={styles.link}
            activeClassName={styles.activeItem}
          >
            Привязать карту
          </NavLink>
        </>
      ) : (
        <span>Список аккаунтов пуст</span>
      )}
    </div>
  );
};

export default Board;
