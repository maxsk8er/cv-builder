// import React, { createRef, useRef, useLayoutEffect } from 'react';
// import ReactHtmlParser from 'html-react-parser';
// import useHeight from '../../utils/useHeight'
//import { observer } from "mobx-react-lite"
import Theme01 from './templates/theme01/Theme01'
import Theme02 from './templates/theme02/Theme02'

const ResumePreview = ({ content, pageId, theme }) => {
	// --
	//const content = page[page.length - 1].val
	// const pars = ReactHtmlParser(content)
	// // const pars2 = Parser(content)

	// const elements = pars.map(element => {
	// 	if (element.props) {
	// 		const inner = element.props.children
	// 		console.log(element.type, inner);
	// 		console.log("element",element);
	// 	}
	// 	return element;
	// });
	// console.log("pars", pars)
	// --

	// const html =$.parseHTML(pars)
	//const element = pars[0].props.children[0]
	// const element = $(html).find("div")
	// const outer = {
	// 	html: element[0].outerHTML
	// }
	// const [state, setState] = useState(null)
	// setState({
	// 	html: element[0].outerHTML
	// });

	// const refs = useRef(content.map(() => createRef()))
	// const restHeight = useHeight(refs, [content], pageId)
	// useLayoutEffect(() => {
	// 	//if (restHeight < 0) {
	// 	console.log("page", restHeight);
	// 	//	}
	// })


	const renderSwitch = (theme) => {
		switch (theme) {
			case 'theme01':
				return <Theme01 content={content} />
			case 'theme02':
				return <Theme02 content={content} />

			default:
				return false
		}
	}

	return (
		<div className="resume-preview_block">
			<div className="resume-preview_abs">
				<div className="resume-preview_frame">
					<section className='resume-preview_section apply-font'>
						{renderSwitch(theme)}
					</section>
				</div>
			</div>
		</div>
	)
}

export default ResumePreview