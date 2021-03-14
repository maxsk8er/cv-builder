import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useGlobalContext } from '../utils/context'
// import FontPicker from "font-picker-react";
import ReactToPrint from 'react-to-print';
import { observer } from 'mobx-react-lite'

import ResumePagePreview from './ResumePagePreview'

const ResumePreview = observer(() => {
	const { appStore } = useGlobalContext()
	const pages = appStore.allData.pages

	//const [pagesRefs, setPagesRefs] = React.useState([]);
	// useEffect(() => {
	// 	setPagesRefs(pagesRefs => {
	// 		Array(pagesLength).fill().map((_, i) => pagesRefs[i] || useRef(null))
	// 	});
	// }, [pagesLength]);

	// const arrLength = arr.length;
	// const pagesRefs = useRef([]);
	// const pagesLength = pages.length
	// if (pagesRefs.current.length !== pagesLength) {
	// 	pagesRefs.current = Array(pagesLength).fill().map((_, i) => pagesRefs.current[i] || useRef(null));
	// }
	
	appStore.setTotalPages(pages.length)
	//---FONTS
	//const [font, setFont] = useState({ activeFontFamily: "Open Sans", })

	//const ref = useRef(null);
	const printRef = useRef(null);

	// const [length, setLength] = useState(0);
	// const elemntsRefs = useRef([]);
	// useLayoutEffect(() => {
	// 	//const lastRef = elemntsRefs[appStore.elements.length]
	// 	const rect = elemntsRefs.current.getClientRects()
	// 	setLength(rect.length)
	// 	console.log(length)
	// }, [length, [appStore]])

	
	// const handleChange = (data) => {

	//}

	return (
		<div className='resume-preview' >
			<div className='preview-wrap' ref={printRef}>
				{pages.map((page, i) => <ResumePagePreview  key={page.id} page={page.content} />)}
				<span>Numero de paginas A4: {appStore.totalPages}</span>
				{/* <FontPicker
					apiKey={process.env.REACT_APP_FONT_API_KEY}
					activeFontFamily={font.activeFontFamily}
					onChange={(nextFont) =>
						setFont({
							activeFontFamily: nextFont.family,
						})
					}
				/> */}
			</div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => printRef.current}
			/>
		</div>
	)
})

export default ResumePreview