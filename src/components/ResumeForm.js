import { useGlobalContext } from '../utils/context'
import InputElement from './InputElement'
import { observer } from 'mobx-react-lite'

const ResumeForm = observer(() => {
	const { appStore } = useGlobalContext()
	return (
		<section className='resume-form'>
			<form>
				{
					appStore.allData.pages.map((page) => {
						if(page.content){
							return page.content.map((elem) => {
								//console.log("elem",elem)
								return <InputElement key={elem.id} element={elem} />
							})
						}
					})
				}
			</form>
		</section>
	)
})

export default ResumeForm