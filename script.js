let nt = document.querySelector("input")
let bt = document.querySelector("button")
let t  = document.querySelector("ul")
bt.addEventListener("click", ()=>{
	nt = document.querySelector("input")
	let np = document.createElement("li")
	np.innerText = nt.value	
	t.appendChild(np)
	np.addEventListener("click", ()=>{
		np.style.setProperty("text-decoration", "line-through") 
	})
	np.addEventListener("dblclick", ()=>{
		t.removeChild(np)
	})
	nt.focus()
	nt.value = ""
})
