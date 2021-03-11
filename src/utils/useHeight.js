import React, { useState, useLayoutEffect, useCallback } from 'react';

const useHeight = (ref, deps) => {
	const [height, setHeight] = useState(null);
	
	// A4 ratio
	const ratio = 1.41451612903;

	const updateHeight = useCallback(() => {
		if (ref && ref.current) {
			const { height, width } = ref.current.getBoundingClientRect();
			const tHeight = Math.floor(width * ratio);
			const nPages = Math.floor(height/tHeight)+1;
			setHeight(nPages);
		}
	}, [ref]);

	useLayoutEffect(() => {
		updateHeight();
		// window.addEventListener('resize', updateHeight);
		// return () => {
		// 	window.removeEventListener('resize', updateHeight);
		// }
	}, [height, deps])

	return [height]
}
export default useHeight