import React from 'react'
import { useGlobalContext } from './context'

const SimpleInputElement = ({ id, lab, val }) => {
	//const data = useContext(useGlobalContext)
	const { hello } = useGlobalContext()

	console.log(hello)
	return (
		<div className='form-control'>
			<label htmlFor={lab}>{lab}</label>
			<input type='text' name={lab} id={lab} className='form-input' value={val} />
		</div>
	)
}

export default SimpleInputElement