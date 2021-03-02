import React from 'react'
import Loading from './Loading'
import ResumeForm from './ResumeForm'
import { useGlobalContext } from './context'


function App() {
	const {
    loading,
  } = useGlobalContext()
	
	
	if (loading) {
		return <Loading />
	}

	return <ResumeForm />
}

export default App;
