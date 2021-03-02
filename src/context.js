import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [loading, setLoading ]  = useState(true)
	const [hello, setHello] = useState('hello123')

	return (
		<AppContext.Provider value={{ hello, loading,setLoading }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }