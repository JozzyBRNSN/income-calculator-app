import styles from './index.module.scss';

export default function TotalIncome({ totalIncome }: any) {
  return (
		<div className={styles.total}>
			<p className={styles.additive}>
				Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка внизу)
			</p>
			<p>Твой доход:</p>
			<h2 className={styles.income}>{totalIncome}₽</h2>
		</div>
	)
}