const allLiItems = document.querySelectorAll('li')
const searchInput = document.querySelector('.search')

const searchFunction = e => {
	const text = e.target.value.toLowerCase()

	allLiItems.forEach(element => {
		if (element.textContent.toLowerCase().indexOf(text) !== -1) {
			element.style.display = 'block'
		} else {
			element.style.display = 'none'
		}
	})
}

searchInput.addEventListener('keyup', searchFunction)
