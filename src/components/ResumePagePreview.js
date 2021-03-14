import React, { useState, createRef, useRef, useLayoutEffect } from 'react';
import ReactHtmlParser from 'html-react-parser';
import useHeight from '../utils/useHeight'
import { observer } from "mobx-react-lite"

const ResumePreview = ({ page }) => {
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

	const refs = useRef(page.map(() => createRef()))
	const restHeight = useHeight(refs, [page])
	useLayoutEffect(() => {
		//if (restHeight < 0) {
			console.log("page",restHeight);
			//	}
	})

	return (
		<div className="resume-preview_block">
			<div className="resume-preview_abs">
				<div className="resume-preview_frame">
					<section className='resume-preview_section apply-font'>
						{
							page.map((elem, i) => {
								if (elem.el === 'textarea') {
									const cont = ReactHtmlParser(elem.val)
									return <div key={elem.id} ref={refs.current[i]} className='text-element'>{cont}</div>
								} else {
									return <span key={elem.id} ref={refs.current[i]} className='text-element'>{elem.val}</span>
								}
							})
						}
					</section>
				</div>
			</div>
		</div>
	)
}

export default ResumePreview