import { useState, useRef } from 'react'
import { useGlobalContext } from '../utils/context'
import ReactHtmlParser from 'react-html-parser';
import FontPicker from "font-picker-react";
import ReactToPrint from 'react-to-print';
import { observer } from 'mobx-react-lite'


const ResumePreview = observer(() => {
	const { elementsTemplate } = useGlobalContext()
	const [font, setFont] = useState({ activeFontFamily: "Open Sans", })
	const componentRef = useRef();

	return (
		<div>
			<section className='resume-preview apply-font' ref={componentRef}>
				{
					elementsTemplate.elements.map((elem) => {
						if (elem.el === 'textarea') {
							const cont = ReactHtmlParser(elem.val)
							return <div key={elem.id}>{cont}</div>
						} else {
							return <span key={elem.id}>{elem.val}</span>
						}
					})
				}
			</section>
			<FontPicker
				apiKey={process.env.REACT_APP_FONT_API_KEY}
				activeFontFamily={font.activeFontFamily}
				onChange={(nextFont) =>
					setFont({
						activeFontFamily: nextFont.family,
					})
				}
			/>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => componentRef.current}
			/>
		</div>
	)
})

export default ResumePreview