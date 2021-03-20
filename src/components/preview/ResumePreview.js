import { useRef } from 'react';
import { useGlobalContext } from '../../utils/context'
import ReactToPrint from 'react-to-print';
import { observer } from 'mobx-react-lite'

import ResumePagePreview from './ResumePagePreview'

const ResumePreview = observer(() => {
	const { appStore } = useGlobalContext()
	const pages = appStore.appData.pages
	const theme = appStore.appData.themeClass

	appStore.setTotalPages(pages.length)
	const printRef = useRef(null);

	return (
		<div className={'resume-preview ' + theme} >
			<div className='preview-wrap' ref={printRef}>
				{pages.map((page, i) => <ResumePagePreview key={page.id} content={page.content} pageId={page.id} />)}
				<span>Numero de paginas A4: {appStore.totalPages}</span>
			</div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => printRef.current}
			/>
		</div>
	)
})

export default ResumePreview