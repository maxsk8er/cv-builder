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
					el: 'file',
					tip: 'file',
					isLab: false,
					lab: 'Photo',
					isVal: false,
					gridClass: 'header right',
					fileName: '123.jpg',
					val: 'data:image/jpeg;base64,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',
				},
				{
					id: uuid(),
					order: 2,
					el: 'name',
					tip: 'text',
					isLab: false,
					lab: 'Nome',
					gridClass: 'header left name',
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
					gridClass: 'header left position',
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
					gridClass: 'header right contact',
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
					gridClass: 'header right contact',
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
					gridClass: 'header right contact',
					val: 'www.google.com'
				},
				// {
				// 	id: uuid(),
				// 	order: 6,
				// 	el: 'date',
				// 	isLab: false,
				// 	lab: 'Data Nascimento',
				// 	isVal: true,
				// 	val: '1930-05-30'//new Date().toLocaleDateString()
				// 	//'2000-01-02'
				// },
				{
					id: uuid(),
					order: 7,
					tip: '',
					el: 'textarea',
					isLab: true,
					lab: 'Sobre',
					gridClass: 'body left',
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