import { useState } from 'react';
import TimeSelect from '../TimeSelect';
import styles from './index.module.scss';

const DEFAULT_STATE_FORM = {
  hourlyRate: '',
  ratePerOrder: '',
  ordersCount: '',
};

export default function Form({
  setTotalIncome,
}: {
  setTotalIncome: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [state, setState] = useState(DEFAULT_STATE_FORM);
  const onHandleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hourlyRate, ratePerOrder, ordersCount } = state;
    setState(DEFAULT_STATE_FORM);
    const income =
      Number(hourlyRate) + Number(ratePerOrder) * Number(ordersCount);
    setTotalIncome(income);
  };

  return (
    <>
      <form onSubmit={onHandleOnSubmit} className={styles.form}>
        <label className={styles.label}>
          Почасовая ставка
          <input
            value={state.hourlyRate}
            onChange={(e) =>
              setState((prevState) => {
                return {
                  hourlyRate: e.target.value,
                  ratePerOrder: prevState.ratePerOrder,
                  ordersCount: prevState.ordersCount,
                };
              })
            }
            type='number'
            name='hourlyRate'
            className={styles.text}
            placeholder='Сумма за час в ₽'
          />
        </label>
        <label className={styles.label}>
          Ставка за заказ
          <input
            value={state.ratePerOrder}
            onChange={(e) =>
              setState((prevState) => {
                return {
                  hourlyRate: prevState.hourlyRate,
                  ratePerOrder: e.target.value,
                  ordersCount: prevState.ordersCount,
                };
              })
            }
            type='number'
            name='ratePerOrder'
            className={styles.text}
            placeholder='Оплата за заказ в ₽'
          />
        </label>
        <label className={styles.label}>
          Количество заказов
          <input
            value={state.ordersCount}
            onChange={(e) =>
              setState((prevState) => {
                return {
                  hourlyRate: prevState.hourlyRate,
                  ratePerOrder: prevState.ratePerOrder,
                  ordersCount: e.target.value,
                };
              })
            }
            type='number'
            name='ordersCount'
            className={styles.text}
            placeholder='Доставленные заказы'
          />
        </label>
        <TimeSelect />
        <button type='submit' className={styles.button}>
          Рассчитать доход
        </button>
      </form>
    </>
  );
}
