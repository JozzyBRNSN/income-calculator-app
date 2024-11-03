import { useState } from 'react'
import styles from './index.module.scss'
import Button from '../Button'
import TotalIncome from '../TotalIncome'

const DEFAULT_STATE_FORM = {
	hourlyRate: '',
	ratePerOrder: '',
	ordersCount: '',
	startTime: '',
	endTime: '',
}

export default function Form() {
	const [state, setState] = useState(DEFAULT_STATE_FORM)
	const onHandleOnSubmit = (e: any) => {
		e.preventDefault()
		const { hourlyRate, ratePerOrder, ordersCount, startTime, endTime } = state
		setState(DEFAULT_STATE_FORM)
		const income =
			Number(ratePerOrder) * Number(ordersCount) +
			Number(hourlyRate) * (Number(endTime) - Number(startTime))
		setTotalIncome(income)
	}

	const [totalIncome, setTotalIncome] = useState(0)

	const timeOptions = Array.from({ length: 24 }, (_, i) => {
		const hours = String(i < 10 ? `0${i}` : i)
		return (
			<option key={i} value={i + 1}>
				{hours}:00
			</option>
		)
	})

	const handleChange = (fieldName: any, value: any) => {
		setState(prevState => ({
			...prevState,
			[fieldName]: value,
		}))
	}

	return (
		<form onSubmit={onHandleOnSubmit} className={styles.form}>
			<label className={styles.label}>
				Почасовая ставка
				<input
					value={state.hourlyRate}
					onChange={e => handleChange('hourlyRate', e.target.value)}
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
					onChange={e => handleChange('ratePerOrder', e.target.value)}
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
					onChange={e => handleChange('ordersCount', e.target.value)}
					type='number'
					name='ordersCount'
					className={styles.text}
					placeholder='Доставленные заказы'
				/>
			</label>
			<label className={styles.label}>
				Продолжительность смены
				<div className={styles.select}>
					<select
						name='startTime'
						value={state.startTime}
						onChange={e => handleChange('startTime', e.target.value)}
						className={styles.option}
					>
						{timeOptions}
					</select>
					до
					<select
						name='endTime'
						value={state.endTime}
						onChange={e => handleChange('endTime', e.target.value)}
						className={styles.option}
					>
						{timeOptions}
					</select>
				</div>
			</label>
			<Button />
			<TotalIncome totalIncome={totalIncome} />
		</form>
	)
}
