import React, { useState, useContext } from 'react'
import appStore from '../store/appStore';

const AppContext = React.createContext()
const _appStore = new appStore()

const AppProvider = ({ children }) => {
	//const [totalPages, setTotalPages] = useState(0);
	//const [templateBase, setTemplateBase] = useState(templateBaseObj)
	// const templateBaseObj =appStore.elemnts

	//const [templateBase, setTemplateBase] = useState(templateBaseObj)

	// const handleChange = (e) => {
	// 	const newTemplateBase = templateBase.map(el =>
	// 		el.id === parseInt(e.target.id)
	// 			? { ...el, val: e.target.value }
	// 			: el
	// 	)
	// 	setTemplateBase(newTemplateBase)
	// }

	// const handleChangeEditor = ({id, data}) => {
	// 	const newTemplateBase = templateBase.map(el =>
	// 		el.id === parseInt(id)
	// 			? { ...el, val: data }
	// 			: el
	// 	)
	// 	setTemplateBase(newTemplateBase)
	// }
	const [isModalOpen, setIsModalOpen] = useState(false)
	const openModal = () => {
		setIsModalOpen(true)
	}
	const closeModal = () => {
		setIsModalOpen(false)
	}

	const [loading, setLoading] = useState(false)

	return (
		<AppContext.Provider value={{ appStore: _appStore, openModal, closeModal, isModalOpen, loading, setLoading }}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }