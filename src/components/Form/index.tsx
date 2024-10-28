import { useState } from 'react'
import CalculationButton from '../СalculationButton/index'
import styles from './index.module.scss'

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
			Number(hourlyRate) * Number(ratePerOrder) * Number(ordersCount)
		setTotalIncome(income)
		console.log(income)
	}

	const { hourlyRate, ratePerOrder, ordersCount } = totalIncome ? state : state

	return (
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
			{/* <label className={styles.label}>
				Продолжительность смены
				<div className={styles.select}>
					<select className={styles.text}>
						<option value='1'>07:00</option>
						<option value='2'>08:00</option>
						<option value='3'>09:00</option>
						<option value='4'>10:00</option>
						<option value='5'>11:00</option>
						<option value='6'>12:00</option>
						<option value='7'>13:00</option>
						<option value='8'>14:00</option>
						<option value='9'>15:00</option>
						<option value='10'>16:00</option>
						<option value='11'>17:00</option>
						<option value='12'>18:00</option>
						<option value='13'>19:00</option>
						<option value='14'>20:00</option>
						<option value='15'>21:00</option>
						<option value='16'>22:00</option>
						<option value='17'>23:00</option>
						<option value='18'>00:00</option>
						<option value='19'>01:00</option>
					</select>
					до
					<select className={styles.text}>
						<option value='1'>07:00</option>
						<option value='2'>08:00</option>
						<option value='3'>09:00</option>
						<option value='4'>10:00</option>
						<option value='5'>11:00</option>
						<option value='6'>12:00</option>
						<option value='7'>13:00</option>
						<option value='8'>14:00</option>
						<option value='9'>15:00</option>
						<option value='10'>16:00</option>
						<option value='11'>17:00</option>
						<option value='12'>18:00</option>
						<option value='13'>19:00</option>
						<option value='14'>20:00</option>
						<option value='15'>21:00</option>
						<option value='16'>22:00</option>
						<option value='17'>23:00</option>
						<option value='18'>00:00</option>
						<option value='19'>01:00</option>
					</select>
				</div>
			</label> */}
			<button onClick={getTotalIncome} type='submit' className={styles.button}>
				Рассчитать доход
			</button>
		</form>
	)
}
