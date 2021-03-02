import React from 'react'
import SimpleInputElement from './FormElements'


const ResumeForm = () => {
	return (
		<main>
			<section className='resume-form'>
				<form>
					<SimpleInputElement lab="Nome" val="123" />
				</form>
			</section>
		</main>
	)
}

export default ResumeForm
