import ReactHtmlParser from 'html-react-parser';
import { createRef, useRef } from 'react';
const Theme02 = ({ content }) => {
	const refs = useRef(content.map(() => createRef()))
	return (
		<>
			{
				content.map((elem, i) => {
					if (elem.el === 'file') {
						const className = 'img-element ' + elem.gridClass
						return (
							<>
								{elem.isVal &&
									<img key={elem.id} src={elem.val} alt="123" className={className} ref={refs.current[i]} />
								}
							</>
						)
					} else if (elem.el === 'textarea') {
						const cont = ReactHtmlParser(elem.val)
						const className = 'element-wrap ' + elem.gridClass
						return (
							<div key={elem.id} className={className}>
								{elem.isLab && elem.isVal &&
									<h4>{elem.lab}</h4>
								}
								{elem.isVal &&
									<div ref={refs.current[i]} className='text-element'>{cont}</div>
								}
							</div>
						)
					} else if (elem.el === 'name') {
						const className = 'element-wrap ' + elem.gridClass
						return (
							<div key={elem.id} className={className}>
								{elem.isLab && elem.isVal &&
									<h4>{elem.lab}</h4>
								}
								{elem.isVal &&
									<h1 ref={refs.current[i]} className='text-element'>{elem.val}</h1>
								}
							</div>
						)
					} else {
						const className = 'element-wrap ' + elem.gridClass
						return (
							<div key={elem.id} className={className}>
								{elem.isLab && elem.isVal &&
									<h4>{elem.lab}</h4>
								}
								{elem.isVal &&
									<span ref={refs.current[i]} className='text-element'>{elem.val}</span>
								}
							</div>
						)
					}
				})
			}
		</>
	)
}

export default Theme02