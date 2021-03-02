import React from 'react'


const SimpleInputElement = ({ id, lab, val, tip, handleChange }) => {
	let dateVal = '';
	if (tip == 'date') {
		const d = new Date(val)
		const day = ('0' + d.getDate()).slice(-2)
		const month = ('0' + (d.getMonth() + 1)).slice(-2)

		dateVal = d.getFullYear() + '-' + (month) + '-' + (day)
	}

	return (
		<div className='form-control'>
			<label htmlFor={id}>{lab}</label>
			<input type={tip} onChange={handleChange} name={id} id={id} nome={lab} className='form-input' value={(dateVal.length > 0) ? dateVal : val} />
		</div>
	)
}

const TextAreaElement = ({ id, lab, val, tip, handleChange }) => {
	return (
		<div className='form-control'>
			<label htmlFor={id}>{lab}</label>
			<textarea name={id} id={id} onChange={handleChange} nome={lab} className='form-input' value={val} />
		</div>
	)
}

export { SimpleInputElement, TextAreaElement }