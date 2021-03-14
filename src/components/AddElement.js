import { useGlobalContext } from '../utils/context'
import Modal from '../Modal'

const AddElement = () => {
	const { appStore, openModal } = useGlobalContext()
	const handleClick = () => {
		openModal()
		//elementsTemplate.changeElement(id, data)
	}
	return (
		<section className='elements-panel'>
			<Modal />
			<ul>
				<li>
				{/* () => appStore.addElement(elemntsSelect[0]) */}
					<button className='btn' onClick={handleClick}>
						Add Input
					</button>
				</li>
			</ul>
		</section>
	)
	
}

export default AddElement;