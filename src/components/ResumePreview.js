import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { useGlobalContext } from '../utils/context'
// import FontPicker from "font-picker-react";
import ReactToPrint from 'react-to-print';
import { observer } from 'mobx-react-lite'

import ResumePagePreview from './ResumePagePreview'

const ResumePreview = observer(() => {
	const { appStore } = useGlobalContext()
	const pages = appStore.allData.pages

	
	appStore.setTotalPages(pages.length)
	//---FONTS
	//const [font, setFont] = useState({ activeFontFamily: "Open Sans", })

	const printRef = useRef(null);

	return (
		<div className='resume-preview' >
			<div className='preview-wrap' ref={printRef}>
				{pages.map((page, i) => <ResumePagePreview  key={page.id} content={page.content} pageId={page.id} />)}
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