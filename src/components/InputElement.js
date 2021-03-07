import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useGlobalContext } from '../utils/context'
import { formatDate } from '../utils/utils'

const InputElement = ({ element }) => {
	const { id, lab, val, tip, el } = element
	const { elementsTemplate } = useGlobalContext()

	let _val = tip === 'date' ? formatDate(val) : '';
	if (_val.length <= 0) {
		_val = val
	}

	const handleChange = (data) => {
		elementsTemplate.changeElement(id, data)
	}
	
	if (el === 'textarea') {
		return (
			<div className='form-control'>
				<label htmlFor={id}>{lab}</label>
				<CKEditor name={id} id={id}
					editor={ClassicEditor}
					data={val}
					onReady={(editor) => { handleChange(editor.getData()) }}
					onChange={(event, editor) => { handleChange(editor.getData()) }}
				/>
			</div>
		)
	}

	return (
		<div className='form-control'>
			<label htmlFor={id}>{lab}</label>
			<input type={tip}
				onChange={(e) => handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={_val} />
		</div>
	)

}

export default InputElement