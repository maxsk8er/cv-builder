import { useGlobalContext } from '../utils/context'
import elemntsSelect from '../store/elemntsSelect'

const AddElement = () => {
	const { elementsTemplate } = useGlobalContext()
	return (
		<section className='elements-panel'>
			<ul>
				<li>
					<button className='btn' onClick={() => elementsTemplate.addElement(elemntsSelect[0])}>
						Add Simple Input
					</button>
				</li>
				<li>Add TextArea</li>
			</ul>
		</section>
	)
}

export default AddElement;