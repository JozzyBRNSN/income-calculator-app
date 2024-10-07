import './Form.css'

export default function Form() {
	return (
		<form className='form-input'>
			<label htmlFor='' className='label-input'>
				Почасовая ставка
				<input
					type='number'
					className='text-input'
					placeholder='Сумма за час в ₽'
				/>
			</label>
			<label htmlFor='' className='label-input'>
				Ставка за заказ
				<input
					type='number'
					className='text-input'
					placeholder='Оплата за заказ в ₽'
				/>
			</label>
			<label htmlFor='' className='label-input'>
				Количество заказов
				<input
					type='number'
					className='text-input'
					placeholder='Доставленные заказы'
				/>
			</label>
			<label htmlFor='' className='label-input'>
				Продолжительность смены
				<div className='input-select'>
					<select type='number' className='text-input'>
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
					<select type='number' className='text-input'>
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
			</label>
		</form>
	)
}
