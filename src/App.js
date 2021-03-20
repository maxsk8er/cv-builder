import AddElement from './components/dashboard/AddElement'
import ResumeForm from './components/form/ResumeForm'
import ResumePreview from './components/preview/ResumePreview'

function App() {
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

export default App;
