

const InputElement = ({ labelObj }) => {
	const { id, lab, isLab, handleChangeLabel, handleToggleLabel, el } = labelObj
	const labeless = ['date', 'list', 'name', 'pagebreake', 'position', 'title']
	return (
		<>
			{!(labeless.indexOf(el) > -1) &&
				<>
					<input
						id={id}
						type='checkbox'
						className='check-is-lab toggle-input'
						defaultChecked={isLab}
						onChange={(e) => handleToggleLabel(e.target.checked)} />
					<label class="toggle radio" for={id}>
						<div class="toggle-inner"></div>
					</label>
				</>
			}
			<input
				onChange={(e) => handleChangeLabel(e.target.value)}
				className='label-input'
				value={lab} />
		</>
	)

}

export default InputElement