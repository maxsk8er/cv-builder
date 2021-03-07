import { useGlobalContext } from './utils/context'

const Loading = () => {
	const {
    loading,
		setLoading,
  } = useGlobalContext()
  return (
    <main>
      <div className='loading' onClick={()=> setLoading(!loading)}>LOADING</div>
    </main>
  )
}

export default Loading
