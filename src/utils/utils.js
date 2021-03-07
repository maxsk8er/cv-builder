
export function formatDate(val){
	const d = new Date(val)
	const day = ('0' + d.getDate()).slice(-2)
	const month = ('0' + (d.getMonth() + 1)).slice(-2)
	
	return d.getFullYear() + '-' + (month) + '-' + (day)
}