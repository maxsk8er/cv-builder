import { CKEditor } from '@ckeditor/ckeditor5-react'
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon'
import { useGlobalContext } from '../../utils/context'
import { formatDate } from '../../utils/utils'
import LabelElement from './LabelElement'
import Resizer from "react-image-file-resizer"

const InputElement = ({ element }) => {
	const { id, lab, isLab, el, isVal } = element
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
	const handleToggleIsVal = (data) => {
		appStore.toggleVal(id, data)
	}
	const valObj = {
		element: element,
		handleChange: (data) => {
			appStore.changeElement(id, data)
		}
	}

	const renderSwitch = (param) => {
		switch (param) {
			case 'name':
				return <ElName valObj={valObj} />
			case 'contact':
				return <ElContact valObj={valObj} />
			case 'position':
				return <ElPosition valObj={valObj} />
			case 'experience':
				return <ElExperience valObj={valObj} />
			case 'textarea':
				return <ElTextarea valObj={valObj} />
			case 'list':
				return <ElList valObj={valObj} />
			case 'title':
				return <ElTitle valObj={valObj} />
			case 'date':
				return <ElDate valObj={valObj} />
			case 'pagebreake':
				return <ElPagebreake valObj={valObj} />
			case 'file':
				return <ElFile valObj={valObj} />
			default:
				return false
		}
	}


	return (
		<div className='form-control'>
			{/* {! && < LabelElement labelObj={labelObj} />} */}
			<IsVal id={id} isVal={isVal} handleToggleIsVal={handleToggleIsVal} />
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
			<label className="toggle radio" htmlFor={_val}>
				<div className="toggle-inner"></div>
			</label>
		</>
	)
}

const ElTextarea = ({ valObj }) => {
	const { id, val } = valObj.element
	return (
		<CKEditor name={id} id={id}
			editor={ClassicEditor}
			data={val}
			onReady={(editor) => { editor ? valObj.handleChange(editor.getData()) : console.log('123') }}
			onChange={(event, editor) => { editor ? valObj.handleChange(editor.getData()) : console.log('123') }}
		/>
	)
}
const ElName = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElContact = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElPosition = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElExperience = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElList = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElTitle = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElDate = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	let _val = tip === 'date' ? formatDate(val) : '';
	if (_val.length <= 0) {
		_val = val
	}

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={_val} />

	)
}
const ElPagebreake = ({ valObj }) => {
	const { id, val, tip } = valObj.element

	return (

		<input type={tip}
			onChange={(e) => valObj.handleChange(e.target.value)}
			name={id}
			id={id}
			className='form-input'
			value={val} />

	)
}
const ElFile = ({ valObj }) => {
	const { id, fileName, tip } = valObj.element

	const uploadImage = async (e) => {
		const file = e.target.files[0]
		//const base64 = await toBase64(file)
		const base64 = await resizeFile(file);
		console.log(base64)
	}

	const resizeFile = (file) => {
		return new Promise((resolve) => {
			Resizer.imageFileResizer(
				file,
				300,
				400,
				"JPEG",
				80,
				0,
				(uri) => {
					resolve(uri);
				},
				"base64"
			)
		})
	}

	// const toBase64 = (file) => {
	// 	return new Promise((resolve, reject) => {
	// 		const fileReader = new FileReader()
	// 		fileReader.readAsDataURL(file)
	// 		fileReader.onload = () => {
	// 			resolve(fileReader.result)
	// 		}
	// 		fileReader.onerror = (error) => {
	// 			reject(error)
	// 		}
	// 	})
	// }
	return (

		<input type={tip}
			onChange={(e) => uploadImage(e)}
			name={id}
			id={id}
			className='form-input'
			//fileName={fileName}
		/>

	)
}

export default InputElement

