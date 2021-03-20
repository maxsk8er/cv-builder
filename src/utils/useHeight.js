import { useLayoutEffect, useCallback } from 'react';
import { useGlobalContext } from '../utils/context'

const useHeight = (refs, deps, pageId) => {
	const { appStore } = useGlobalContext()
	//const [height, setHeight] = useState(null);

	// A4 ratio
	const ratio = 1.41451612903;

	const updateHeight = useCallback(() => {
		let totalHeight = 0;
		let pageWidth = 0;
		if (refs && refs.current) {
			refs.current.map(ref => {
				if (ref && ref.current) {
					const { height, width } = ref.current.getBoundingClientRect();
					pageWidth=width
					
					//const nPages = Math.floor(height / tHeight) + 1
					totalHeight = totalHeight + height
					//setHeight(nPages);
				}
				return false
			})
		}
		const tHeight = Math.floor(pageWidth * ratio)
		const restHeight = tHeight-totalHeight 
		//console.log({totalHeight, tHeight,restHeight})
		//console.log({restHeight,pageId});
		if(restHeight<=0){
			appStore.createNewPage(pageId)
		}
		return restHeight
		//appStore.setTotalPages(totalPages)
	}, [refs, appStore, pageId]);

	useLayoutEffect(() => {
		updateHeight()
		// window.addEventListener('resize', updateHeight);
		// return () => {
		// 	window.removeEventListener('resize', updateHeight);
		// }
	}, [appStore.TotalPages, deps, updateHeight])

	//return [height]
}
export default useHeight