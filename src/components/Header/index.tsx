import styles from './index.module.scss'

export default function Header() {
	return (
		<header>
			<h1>Калькулятор дохода</h1>
			<p className={styles.text}>
				Расчет дохода по новой системе оплаты с учетом всех надбавок
			</p>
		</header>
	)
}
