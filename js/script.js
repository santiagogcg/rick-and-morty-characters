// Borrar lista de personajes y Rederizar una página de personajes
// Navegar a la siguiente página
// Navegar a la página anterior
// getPersonajes()

const container = document.getElementById('character-list')

const prevPageButton = document.getElementById('prev-page')
const nextPageButton = document.getElementById('next-page')

const baseURL = 'https://rickandmortyapi.com/api/character/?page='

let currentPage = 1
let pageCount = null

getCharacters(currentPage)

prevPageButton.addEventListener('click', function () {
	if (currentPage === 1) return

	getCharacters(--currentPage)
})

nextPageButton.addEventListener('click', function () {
	if (currentPage === pageCount) return

	getCharacters(++currentPage)
})

function getCharacters(page) {
	const endpoint = baseURL + page

	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			pageCount = data.info.pages

			renderCharacters(data.results)
		})
		.catch((err) => {
			alert('Error al obtener recursos del servidor')
		})
}

function renderCharacters(characters) {
	container.innerHTML = ''

	characters.forEach((character) => {
		container.innerHTML += `
      <article class="card">
        <img class="card__image" src="${character.image}" alt="${character.name}" />
        <ul class="card__details">
          <li className="card__detail">
            <p><b className="card__label">Name:</b> ${character.name}</p>
          </li>
          <li className="card__detail">
            <p><b className="card__label">Specie:</b> ${character.species}</p>

          </li>
        </ul>
      </article>
    `
	})
}