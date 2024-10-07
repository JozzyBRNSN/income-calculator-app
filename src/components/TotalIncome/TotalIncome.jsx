import './TotalIncome.css'

export default function TotalIncome() {
	return (
		<div className='total-income'>
			<p className='text-header'>
				Надбавок нет. Ты можешь добавить их в Конструкторе (Третья кнопка внизу)
			</p>
			<p>Твой доход:</p>
			<h2 className='income'>0₽</h2>
		</div>
	)
}
