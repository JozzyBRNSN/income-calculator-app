import { useState } from 'react'
import Header from './components/Header/index.tsx'
import Form from './components/Form/index.tsx'
import styles from './components/Form/index.module.scss'

export default function App() {
	const [totalIncome, setTotalIncome] = useState(0)

	return (
		<>
			<Header />
			<Form setTotalIncome={setTotalIncome} />
			<div className={styles.total}>
				<p className={styles.additive}>
					Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка
					внизу)
				</p>
				<p>Твой доход:</p>
				<h2 className={styles.income}>{totalIncome}₽</h2>
			</div>
		</>
	)
}
