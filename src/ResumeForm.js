import React from 'react'
import { SimpleInputElement, TextAreaElement } from './FormElements'
//import { SimpleInputElement, TextAreaElement } from './PreviewElements'
import { useGlobalContext } from './context'


const ResumeForm = () => {
	const { templateBase, handleChange } = useGlobalContext()
	
	return (
		<main className='resume-holder'>
			<section className='resume-form'>
				<form>
					{
						templateBase.map((elem) => {
							if (elem.el === 'textarea') {
								return <TextAreaElement key={elem.id} {...elem} handleChange={handleChange} />
							} else {
								return <SimpleInputElement key={elem.id} {...elem} handleChange={handleChange} />
							}
						})
					}
				</form>
			</section>
			<section className='resume-preview'>
			{
						templateBase.map((elem) => {
							if (elem.el === 'textarea') {
								return <p>{elem.val}</p>
							} else {
								return <span>{elem.val}</span>
							}
						})
					}
			</section>
		</main>
	)
}

export default ResumeForm
