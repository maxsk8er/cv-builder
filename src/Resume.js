import AddElement from './components/AddElement'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'

const Resume = () => {
	return (
		<main className='main-holder'>
			<AddElement />
			<div className='resume-holder'>
				<ResumeForm />
				<ResumePreview />
			</div>
		</main>
	)
}

export default Resume
