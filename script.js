fetch("https://api.github.com/emojis").then(
	function(data){
		return data.json
	}).then(
	function(data){
		let body = document.querySelector("body")
		for(let i in data){
			let img = document.createElement("img")
			img.setAttribute("src", data[i])
			body.appendChild(img)
		}
	})
	