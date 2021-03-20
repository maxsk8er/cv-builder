import { makeAutoObservable } from 'mobx'
import ReactHtmlParser from 'html-react-parser';
import uuid from 'react-uuid'
import ReactDomServer from 'react-dom/server'
import appData from '../data/appData.js'

export default class ElementsStore {

	constructor() {
		//console.log("elementsBase",elementsBase);
		this._appData = appData
		makeAutoObservable(this)
		//, {}, { deep: true }
	}

	// setElements(elements) {
	// 	this.elements = elements
	// }

	//TODO
	// addElement(element) {
	// 	this._elements.push({ ...element, id: uuid(), order: this._elements.length + 1 })
	// 	this._elements.sort((a, b) => a.order - b.order);
	// }

	// removeElement(id) {
	// 	this._elements = this._elements.filter(element => element.id !== id)
	// }

	changeElement(id, elValue) {
		this._appData.pages.map(page => {
			page.content = page.content.map(el => el.id === id ? { ...el, val: elValue } : el)
			return page
		})
	}

	changeLabel(id, elValue) {
		this._appData.pages.map(page => {
			page.content = page.content.map(el => el.id === id ? { ...el, lab: elValue } : el)
			return page
		})
	}
	toggleLabel(id, elValue) {
		console.log({elValue})
		this._appData.pages.map(page => {
			page.content = page.content.map(el => el.id === id ? { ...el, isLab: elValue } : el)
			return page
		})
	}
	toggleVal(id, elValue) {
		console.log({elValue})
		this._appData.pages.map(page => {
			page.content = page.content.map(el => el.id === id ? { ...el, isVal: elValue } : el)
			return page
		})
	}

	// get totalPages() {
	// 	return this._elements
	// }
	createNewPage(pageId) {
		console.log("createNewPage")
		//const thisPageContent = [...this._appData.pages[page].content]
		let lasContent = this._appData.pages.find(p=>p.id===pageId).content.pop()//[...thisPageContent[thisPageContent.length - 1]]
		let pars = [...ReactHtmlParser(lasContent.val)]//.reverse()
		//console.log({ pars }, thisPageContent.length)
		if (pars.length > 0) {
			const lastElement = pars.pop();
			console.log("pars.length", lastElement)

			//pars.slice(0).reverse().find(element => {
			// 		if (element.props) {
			// 			return element
			// 			// const inner = element.props.children
			// 			// console.log(element.type, inner);
			// 			// console.log("element", element);
			// 		}
			// 	})
			//.pop();

			const lastElementMarkup = ReactDomServer.renderToStaticMarkup(lastElement)
			const parsMarkup = ReactDomServer.renderToStaticMarkup(pars)
			// console.log({parsMarkup, staticMarkup})

			let newPage = {
				id: pageId+1,
				order: 3,
				content: []
			}
			const oldElement = { ...lasContent, id: uuid(), val: parsMarkup }
			// {
			// 	id: uuid(),
			// 	order: 7,
			// 	tip: '',
			// 	el: 'textarea',
			// 	lab: 'Sobre',
			// 	val: parsMarkup,
			// }
			const newElement = { ...lasContent, id: uuid(), val: lastElementMarkup }
			console.log({ oldElement, newElement })
			// {
			// 	id: uuid(),
			// 	order: 7,
			// 	tip: '',
			// 	el: 'textarea',
			// 	lab: 'Sobre',
			// 	val: lastElementMarkup,
			// }
			//this._appData.pages[page].content = []
			this._appData.pages.find(p=>p.id===pageId).content.push(oldElement)
			// //lastElement
			newPage.content.push(newElement)
			this._appData.pages.push(newPage)
			console.log("pages", this._appData.pages)
			//console.log({ lastElement })npm start
		}
		// const elements = pars.map(element => {
		// 		if (element.props) {
		// 			const inner = element.props.children
		// 			console.log(element.type, inner);
		// 			console.log("element",element);
		// 		}
		// 	}
		// }
		// this._appData.totalPages = totalPages
	}
	setTotalPages(totalPages) {
		this._appData.totalPages = totalPages
	}
	get totalPages() {
		return this._appData.totalPages
	}
	get appData() {
		return this._appData
	}
}