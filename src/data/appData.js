import uuid from 'react-uuid'

const appData = {
	totalPages: 1,
	config:{
		themeClass: 'theme02',
	},
	pages: [
		{
			id: 1,
			order: 1,
			content: [
				{
					id: uuid(),
					order: 2,
					el: 'name',
					tip: 'text',
					resTip: 'name',
					isLab: false,
					lab: 'Nome',
					isVal: true,
					val: 'Maksym Snigirov',
				},
				{
					id: uuid(),
					order: 1,
					el: 'position',
					tip: 'text',
					isLab: false,
					lab: 'Posicao',
					isVal: true,
					val: 'Front-end Developer'
				},
				{
					id: uuid(),
					order: 3,
					el: 'contact',
					tip: 'email',
					isLab: false,
					lab: 'Email',
					isVal: true,
					val: '123@gmail.com'
				},
				{
					id: uuid(),
					order: 4,
					el: 'contact',
					tip: 'tel',
					isLab: false,
					lab: 'Telemovel',
					isVal: true,
					val: '+351 911 111 111'
				},
				{
					id: uuid(),
					order: 5,
					el: 'contact',
					tip: 'url',
					isLab: false,
					lab: 'Site',
					isVal: true,
					val: 'www.google.com'
				},
				{
					id: uuid(),
					order: 6,
					el: 'date',
					isLab: false,
					lab: 'Data Nascimento',
					isVal: true,
					val: '1930-05-30'//new Date().toLocaleDateString()
					//'2000-01-02'
				},
				{
					id: uuid(),
					order: 7,
					tip: '',
					el: 'textarea',
					isLab: true,
					lab: 'Sobre',
					isVal: true,
					val: `<span>Lorem ipsum dolor sit amet,</span> <div class='123'>consectetur adipiscing</div> elit, sed do <i><strong>eiusmod</strong></i> tempor incididunt ut labore et dolore magna aliqua. Sollicitudin ac orci phasellus egestas. Sit amet dictum sit amet. Sed risus ultricies tristique nulla aliquet. Interdum varius sit amet mattis vulputate enim. Nisi est sit amet facilisis magna. Quis vel eros donec ac odio tempor. Donec massa sapien faucibus et molestie ac feugiat sed. Morbi tincidunt ornare massa eget. Eros in cursus turpis massa tincidunt. At tellus at urna condimentum mattis pellentesque id nibh tortor. Eu consequat ac felis donec et odio pellentesque diam volutpat. Senectus et netus et malesuada. Eu sem integer vitae justo eget. In mollis nunc sed id semper risus in. Curabitur gravida arcu ac tortor dignissim. Sit amet risus nullam eget felis eget nunc lobortis. Eget nunc lobortis mattis aliquam faucibus purus in massa.`

		// Aenean vel elit scelerisque mauris pellentesque. Eleifend mi in nulla posuere. Consectetur lorem donec massa sapien faucibus et. Egestas sed tempus urna et pharetra pharetra massa massa. Morbi tincidunt augue interdum velit euismod in pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Malesuada fames ac turpis egestas sed tempus.`

				},
			]
		},
		// {
		// 	id: 2,
		// 	order: 2,
		// 	content: [
		// 		{
		// 			id: uuid(),
		// 			order: 7,
		// 			tip: '',
		// 			el: 'textarea',
		// 			lab: 'Sobre',
		// 			val: `  Tellus molestie nunc non blandit massa enim nec. Risus quis varius quam quisque id.
		// 			Fringilla ut morbi tincidunt augue interdum velit euismod in.
		// 			Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum.
		// 			 Massa placerat duis ultricies lacus sed turpis tincidunt id.
		
		// 			In nulla posuere sollicitudin aliquam ultrices sagittis. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Mi quis hendrerit dolor magna eget. Adipiscing at in tellus integer feugiat scelerisque varius. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Turpis tincidunt id aliquet risus. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Vel orci porta non pulvinar neque laoreet suspendisse. Hendrerit dolor magna eget est lorem ipsum dolor. Neque vitae tempus quam pellentesque nec. Facilisis magna etiam tempor orci eu lobortis. Blandit volutpat maecenas volutpat blandit aliquam. Condimentum lacinia quis vel eros donec ac odio tempor orci.
					
		// 			Nisl nisi scelerisque eu ultrices. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Felis eget velit aliquet sagittis id consectetur purus ut. Id porta nibh venenatis cras sed felis eget velit aliquet. Vel pretium lectus quam id leo in vitae turpis. Purus faucibus ornare suspendisse sed.ongue. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Lectus sit amet est placerat in egestas. In tellus integer feugiat scelerisque varius morbi enim. Malesuada proin libero nunc consequat interdum varius sit amet. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Vitae congue mauris rhoncus aenean. Id porta nibh venenatis cras sed felis eget. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Tellus rutrum tellus pellentesque eu tincidunt tortor.
		// 			Risus feugiat in ante metus dictum at tempor. Id diam vel quam elementum pulvinar etiam non quam lacus.`
			
		// 		},
		// 	]
		// },
		// {
		// 	id: 3,
		// 	order: 3,
		// 	content: [
		// 		{
		// 			id: uuid(),
		// 			order: 7,
		// 			tip: '',
		// 			el: 'textarea',
		// 			lab: 'Sobre',
		// 			val: 
		// 			` Ultricies integer quis auctor elit sed vulputate mi sit amet. Habitant morbi tristique senectus et. Sed adipiscing diam donec adipiscing. Bibendum neque egestas congue quisque. Arcu non odio euismod lacinia. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Commodo ullamcorper a lacus vestibulum sed arcu non.
		// 			Tempor commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt praesent semper feugiat nibh sed. Maecenas accumsan lacus vel facilisis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Eu lobortis elementum nibh tellus molestie nunc non blandit. Sagittis vitae et leo duis ut diam. Tempus quam pellentesque nec nam aliquam sem et. Ipsum a arcu cursus vitae c`
		// 		},
		// 	]
		// }
	]
}
export default appData