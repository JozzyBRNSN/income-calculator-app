import { useRef } from 'react'
import CalculationButton from '../СalculationButton/index'
import styles from './index.module.scss'

export default function Form() {
	const refForm = useRef<any>(null)
	const result = {
		hourlyRate: '',
		ratePerOrder: '',
		ordersCount: '',
	}

	const onHandleOnSubmit = (e: any) => {
		e.preventDefault()
		refForm.current.reset()
		console.log(result)
		result.hourlyRate = ''
		result.ratePerOrder = ''
		result.ordersCount = ''
	}

	return (
		<form onSubmit={onHandleOnSubmit} ref={refForm} className={styles.form}>
			<label className={styles.label}>
				Почасовая ставка
				<input
					onChange={e => (result.hourlyRate = e.target.value)}
					name='hourlyRate'
					className={styles.text}
					placeholder='Сумма за час в ₽'
				/>
			</label>
			<label className={styles.label}>
				Ставка за заказ
				<input
					onChange={e => (result.ratePerOrder = e.target.value)}
					name='ratePerOrder'
					className={styles.text}
					placeholder='Оплата за заказ в ₽'
				/>
			</label>
			<label className={styles.label}>
				Количество заказов
				<input
					onChange={e => (result.ordersCount = e.target.value)}
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
			<CalculationButton />
		</form>
	)
}
