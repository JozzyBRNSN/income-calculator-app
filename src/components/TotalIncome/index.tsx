import styles from './index.module.scss'

export default function TotalIncome() {
	return (
		<div className={styles.total}>
			<p className={styles.text}>
				Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка внизу)
			</p>
			<p>Твой доход:</p>
			<h2 className={styles.income}>0₽</h2>
		</div>
	)
}