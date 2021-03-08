import React, { useState } from 'react'
import { useGlobalContext } from './utils/context'
import elemntsSelect from './store/elemntsSelect'

const Modal = () => {
	const { elementsTemplate, isModalOpen, closeModal } = useGlobalContext()
	const [nome, setNome] = useState('')
	const [tip, setTip] = useState(0)
	const handleClick = (e) => {
		e.preventDefault()
		elementsTemplate.addElement({ ...elemntsSelect[tip], lab: nome })
	}

	const handleChange = (e) => {
		if (e.target.name === 'tip') {
			setTip(parseInt(e.target.value))
		} else {
			setNome(e.target.value)
		}

	}

	return (
		<div
			className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'
				}`}
		>
			<div className='modal-content'>
				<form>
					<select name='tip' onChange={handleChange}>
						{
							elemntsSelect.map((elem, index) => {
								return <option key={index} value={index}>{elem.el}</option>
							})
						}
					</select>
					<div className='form-control'>
						<label htmlFor='nome'>Name</label>
						<input type='text'
							name='nome'
							id='nome'
							onChange={handleChange}
							className='form-input' />
					</div>
					<button className='close-btn' onClick={handleClick}>
						add
        </button>
				</form>
				<button className='close-btn' onClick={closeModal}>
					close
        </button>
			</div>
		</div>
	)
}

export default Modal
