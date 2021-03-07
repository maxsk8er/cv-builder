import AddElement from './components/AddElement'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

const Resume = () => {
	return (
		<main>
			<AddElement />
			<div className='resume-holder'>
				<ResumeForm />
				<ResumePreview />
			</div>
		</main>
	)
}

export default Resume
