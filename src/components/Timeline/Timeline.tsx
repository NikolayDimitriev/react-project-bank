/**
 * Компонент Timeline
 * Предназначен для отображения списка операций
 * Пример использования: <Timeline items=[operation1, operation2, ...] />
 * где operation - информация по операции { id, title, date, amount, currency }
 * Параметр: items - массив из operations
 */

import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline: React.FC<any> = ({ items }) => {
  let title = "";

  if (items) {
    if (items.length) {
      title = "Список операций";
    } else {
      title = "Список операций по данному аккаунту пуст";
    }
  }

  return (
    <>
      <h2>{title}</h2>
      {items ? (
        items.map((operation) => (
          <TimelineItem
            key={operation.id}
            id={operation.id}
            title={operation.title}
            date={operation.date}
            amount={operation.amount}
            currency={operation.currency}
          />
        ))
      ) : (
        <h2>Подождите, идёт загрузка</h2>
      )}
    </>
  );
};

export default Timeline;
