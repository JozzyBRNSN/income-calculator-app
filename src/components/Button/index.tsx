import styles from './index.module.scss'

export default function Button() {
	return (
		<button type='submit' className={styles.button}>
			Рассчитать доход
		</button>
	)
}
