import { useGlobalContext } from '../utils/context'
import InputElement from './InputElement'
import { observer } from 'mobx-react-lite'

const ResumeForm = observer(() => {
	const { elementsTemplate } = useGlobalContext()
	return (
		<section className='resume-form'>
			<form>
				{
					elementsTemplate.elements.map((elem) => {
						return <InputElement key={elem.id} element={elem} />
					})
				}
			</form>
		</section>
	)
})

export default ResumeForm