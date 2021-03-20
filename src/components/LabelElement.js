

const InputElement = ({ labelObj }) => {
	const { lab, isLab, handleChangeLabel, handleToggleLabel } = labelObj
	return (
		<>
			<input
				type='checkbox'
				className='check-is-lab'
				defaultChecked={isLab}
				onChange={(e) => handleToggleLabel(e.target.checked)} />
			<input
				onChange={(e) => handleChangeLabel(e.target.value)}
				className='label-input'
				value={lab} />
		</>
	)

}

export default InputElement