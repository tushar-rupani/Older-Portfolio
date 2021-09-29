console.log("Done")
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}
else{
	setTheme(theme)

}
let themeDots = document.getElementsByClassName('theme-dot')
console.log(themeDots)

for(var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		console.log("Clicked")
		let mode = this.dataset.mode
		console.log("Clicked", mode)
		setTheme(mode)

	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	localStorage.setItem('theme', mode)
}