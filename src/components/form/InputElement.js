import { CKEditor } from '@ckeditor/ckeditor5-react'
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon'
import { useGlobalContext } from '../../utils/context'
import { formatDate } from '../../utils/utils'
import LabelElement from './LabelElement'

const InputElement = ({ element }) => {
	const { id, lab, isLab, el } = element
	const { appStore } = useGlobalContext()

	const labelObj = {
		id: id,
		lab: lab,
		isLab: isLab,
		el: el,
		handleChangeLabel: (data) => {
			appStore.changeLabel(id, data)
		},
		handleToggleLabel: (data) => {
			appStore.toggleLabel(id, data)
		}

	}
	const valObj = {
		element: element,
		handleToggleIsVal: (data) => {
			appStore.toggleVal(id, data)
		},
		handleChange: (data) => {
			appStore.changeElement(id, data)
		}
	}

	const renderSwitch = (param) => {
		switch (param) {
			case 'name':
				return <ElName valObj={valObj} />;
			case 'contact':
				return <ElContact valObj={valObj} />;
			case 'position':
				return <ElPosition valObj={valObj} />;
			case 'experience':
				return <ElExperience valObj={valObj} />;
			case 'textarea':
				return <ElTextarea valObj={valObj} />;
			case 'list':
				return <ElList valObj={valObj} />;
			case 'title':
				return <ElTitle valObj={valObj} />;
			case 'date':
				return <ElDate valObj={valObj} />;
			case 'pagebreake':
				return <ElPagebreake valObj={valObj} />;
			default:
				return <ElName valObj={valObj} />;
		}
	}


	return (
		<div className='form-control'>
			{/* {! && < LabelElement labelObj={labelObj} />} */}
			<LabelElement labelObj={labelObj} />
			<div className="val-holder">{renderSwitch(el)}</div>
		</div>
	)


}
const IsVal = ({ id, isVal, handleToggleIsVal }) => {
	const _val = "val" + id
	return (
		<>
			<input
				id={_val}
				type='checkbox'
				className='check-is-lab toggle-input'
				defaultChecked={isVal}
				onChange={(e) => handleToggleIsVal(e.target.checked)} />
			<label class="toggle radio" for={_val}>
				<div class="toggle-inner"></div>
			</label>
		</>
	)
}

const ElTextarea = ({ valObj }) => {
	const { id, val, isVal } = valObj.element
	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<CKEditor name={id} id={id}
				editor={ClassicEditor}
				data={val}
				onReady={(editor) => { editor ? valObj.handleChange(editor.getData()) : console.log('123') }}
				onChange={(event, editor) => { editor ? valObj.handleChange(editor.getData()) : console.log('123') }}
			/>
		</>
	)
}
const ElName = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElContact = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElPosition = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElExperience = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElList = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElTitle = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}
const ElDate = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	let _val = tip === 'date' ? formatDate(val) : '';
	if (_val.length <= 0) {
		_val = val
	}

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={_val} />
		</>
	)
}
const ElPagebreake = ({ valObj }) => {
	const { id, val, tip, isVal } = valObj.element

	return (
		<>
			<IsVal id={id} isVal={isVal} handleToggleIsVal={valObj.handleToggleIsVal} />
			<input type={tip}
				onChange={(e) => valObj.handleChange(e.target.value)}
				name={id}
				id={id}
				className='form-input'
				value={val} />
		</>
	)
}

export default InputElement

