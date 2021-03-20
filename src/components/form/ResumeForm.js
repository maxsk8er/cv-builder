import { useGlobalContext } from '../../utils/context'
import InputElement from './InputElement'
import { observer } from 'mobx-react-lite'

const ResumeForm = observer(() => {
	const { appStore } = useGlobalContext()
	return (
		<section className='resume-form'>
			<form>
				{
					appStore.appData.pages.map((page) => {
						if (page && page.content) {
							return page.content.map((elem) => {
								if (elem) {
									return <InputElement key={elem.id} element={elem} />
								}
								return false
							})
						}
						return false
					})
				}
			</form>
		</section>
	)
})

export default ResumeForm