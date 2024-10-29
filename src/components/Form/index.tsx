import { useState } from 'react'
import styles from './index.module.scss'
import TimeSelect from '../TimeSelect'

const DEFAULT_STATE_FORM = {
	hourlyRate: '',
	ratePerOrder: '',
	ordersCount: '',
}

export default function Form() {
	const [state, setState] = useState(DEFAULT_STATE_FORM)
	const onHandleOnSubmit = (e: any) => {
		e.preventDefault()
		setState(DEFAULT_STATE_FORM)
		console.log(state)
	}

	const [totalIncome, setTotalIncome] = useState(0)
	const getTotalIncome = () => {
		const income =
			Number(hourlyRate) + Number(ratePerOrder) * Number(ordersCount)
		setTotalIncome(income)
		console.log(income)
	}

	const { hourlyRate, ratePerOrder, ordersCount } = totalIncome ? state : state

	return (
		<>
			<form onSubmit={onHandleOnSubmit} className={styles.form}>
				<label className={styles.label}>
					Почасовая ставка
					<input
						value={state.hourlyRate}
						onChange={e =>
							setState(prevState => {
								return {
									hourlyRate: e.target.value,
									ratePerOrder: prevState.ratePerOrder,
									ordersCount: prevState.ordersCount,
								}
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
						onChange={e =>
							setState(prevState => {
								return {
									hourlyRate: prevState.hourlyRate,
									ratePerOrder: e.target.value,
									ordersCount: prevState.ordersCount,
								}
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
						onChange={e =>
							setState(prevState => {
								return {
									hourlyRate: prevState.hourlyRate,
									ratePerOrder: prevState.ratePerOrder,
									ordersCount: e.target.value,
								}
							})
						}
						type='number'
						name='ordersCount'
						className={styles.text}
						placeholder='Доставленные заказы'
					/>
				</label>
				<TimeSelect />
				<button
					onClick={getTotalIncome}
					type='submit'
					className={styles.button}
				>
					Рассчитать доход
				</button>
			</form>
			<div className={styles.total}>
				<p className={styles.text2}>
					Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка
					внизу)
				</p>
				<p>Твой доход:</p>
				<h2 className={styles.income}>{totalIncome}₽</h2>
			</div>
		</>
	)
}
