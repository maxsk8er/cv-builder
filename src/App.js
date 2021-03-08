import React from 'react'
import Loading from './Loading'
import Resume from './Resume'
import { useGlobalContext } from './utils/context'


function App() {
	const {
    loading,
  } = useGlobalContext()
	
	if (loading) {
		return <Loading />
	}
	return <Resume />
}

export default App;
