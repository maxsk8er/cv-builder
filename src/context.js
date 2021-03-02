import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

	const templateBaseObj = [
		{
			id: 0,
			el: 'input',
			tip: 'text',
			lab: 'Nome',
			val: 123
		},
		{
			id: 1,
			el: 'input',
			tip: 'text',
			lab: 'Posicao',
			val: 'hello'
		},
		{
			id: 2,
			el: 'input',
			tip: 'email',
			lab: 'Email',
			val: 'hello@hello.com'
		},
		{
			id: 3,
			el: 'input',
			tip: 'tel',
			lab: 'Telemovel',
			val: 123456789
		},
		{
			id: 4,
			el: 'input',
			tip: 'url',
			lab: 'Site',
			val: 'www.google.com'
		},
		// {
		// 	id: 5,
		// 	tip: 'number',
		// 	lab: 'Numero',
		// 	val: 5
		// },
		{
			id: 6,
			tip: 'date',
			el: 'input',
			lab: 'Data Nascimento',
			val: new Date().toLocaleDateString()
			//'2000-01-02'
		},
		{
			id: 7,
			tip: '',
			el: 'textarea',
			lab: 'Sobre',
			val: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.'
			//'2000-01-02'
		},
	]

	const [templateBase, setTemplateBase] = useState(templateBaseObj)

	const handleChange = (e) => {
		const newTemplateBase = templateBase.map(el =>
			el.id === parseInt(e.target.id)
				? { ...el, val: e.target.value }
				: el
		)
		setTemplateBase(newTemplateBase)
	}

	const [loading, setLoading] = useState(true)

	return (
		<AppContext.Provider value={{ templateBase, handleChange, loading, setLoading }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }