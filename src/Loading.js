import React from 'react'
import { useGlobalContext } from './context'

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
