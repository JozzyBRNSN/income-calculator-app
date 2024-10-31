import { useState } from 'react'
import styles from './index.module.scss'

export default function TotalIncome() {
const [totalIncome, setTotalIncome] = useState(0)

	return (
		<div className={styles.total}>
			<p className={styles.text}>
				Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка внизу)
			</p>
			<p>Твой доход:</p>
			<h2 className={styles.income}>{totalIncome}₽</h2>
		</div>
	)
}
