import uuid from 'react-uuid'

const elementsProfile =[
	{
		id: uuid(),
		order: 1,
		el: 'input',
		tip: 'text',
		lab: 'Nome',
		val: 'Maksym Snigirov',
	},
	{
		id: uuid(),
		order: 2,
		el: 'input',
		tip: 'text',
		lab: 'Posicao',
		val: 'Front-end Developer'
	},
	{
		id: uuid(),
		order: 3,
		el: 'input',
		tip: 'email',
		lab: 'Email',
		val: '123@gmail.com'
	},
	{
		id: uuid(),
		order: 4,
		el: 'input',
		tip: 'tel',
		lab: 'Telemovel',
		val: '+351 911 111 111'
	},
	{
		id: uuid(),
		order: 5,
		el: 'input',
		tip: 'url',
		lab: 'Site',
		val: 'www.google.com'
	},
	{
		id: uuid(),
		order: 6,
		tip: 'date',
		el: 'input',
		lab: 'Data Nascimento',
		val: '1930-05-30'//new Date().toLocaleDateString()
		//'2000-01-02'
	},
	{
		id: uuid(),
		order: 7,
		tip: '',
		el: 'textarea',
		lab: 'Sobre',
		val: 'O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.'
		//'2000-01-02'
	},
]

export default elementsProfile