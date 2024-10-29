import styles from './index.module.scss'

export default function TimeSelect() {
	const timeOptions = Array.from({ length: 24 }, (_, i) => {
		const hours = String(i < 10 ? `0${i}` : i)
		return (
			<option key={i} value={i + 1}>
				{hours}:00
			</option>
		)
  })
  
  return (
		<label className={styles.label}>
			Продолжительность смены
			<div className={styles.select}>
				<select className={styles.text}>{timeOptions}</select>
				до
				<select className={styles.text}>{timeOptions}</select>
			</div>
		</label>
	)
}
