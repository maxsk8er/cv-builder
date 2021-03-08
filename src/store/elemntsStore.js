import { makeAutoObservable } from 'mobx'
import elementsBase from './elementsProfile'
import uuid from 'react-uuid'

export default class ElementsStore {
	constructor() {
		this._elements = elementsBase
		makeAutoObservable(this)
		//, {}, { deep: true }
	}

	// setElements(elements) {
	// 	this.elements = elements
	// }

	addElement(element) {
		this._elements.push({ ...element, id: uuid(), order: this._elements.length + 1 })
		this._elements.sort((a, b) => a.order - b.order);
	}

	// removeElement(id) {
	// 	this._elements = this._elements.filter(element => element.id !== id)
	// }

	changeElement(id, elValue) {
		this._elements = this._elements.map(el => el.id === id ? { ...el, val: elValue } : el)
	}

	get elements() {
		return this._elements
	}
}