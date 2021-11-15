async function fetchData(name) {
  const url = `https://rickandmortyapi.com/api/character`;
  try {
    const res = await axios.get(url);
    const charData = res.data.results;
    filterData(charData, name);
  } catch (error) {
    console.log(error);
  }
}

const datadiv = document.querySelector("#char-data");

function showCharData(data) {
  console.log(data);
  data.forEach(character => {
    const charName = document.createElement("h2");
    charName.innerText = character.name;
    datadiv.appendChild(charName);
    const charStatus = document.createElement("h3");
    charStatus.innerText = character.status;
    datadiv.appendChild(charStatus);
    const image = document.createElement("img");
    image.src = character.image;
    datadiv.appendChild(image);
  });
}

let searchInput = document.querySelector("#blank");

let searchform = document.querySelector(".search-section");
searchform.addEventListener("submit", (event) => {
  event.preventDefault()
  let name = searchInput.value
  fetchData(name);
});

function filterData(characters, name) {
  let foundChar = characters.filter(character => {
    if (character.name.toLowerCase() === name.toLowerCase()) {
      return character
    }
  })
  showCharData(foundChar);
}