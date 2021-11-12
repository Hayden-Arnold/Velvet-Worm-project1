// async function fetchData(character) {
//   try {
//     let url = await fetch(`https://rickandmortyapi.com/api/character`);
//     let user = await response.json();
//     newfunction();
//   } catch (error) {
//     console.error(error);
//   }
// }

// axios
//   .get("https://rickandmortyapi.com/api/character")
//   .then((res) => {
//   console.log(res.data.results);
//   })
//   .catch((error) => {
//     console.log(error);
// })


// function fetchData(name) {
//   const url = `https://rickandmortyapi.com/api/character`;
//   axios.get(url).then((res) => {
//     console.log(res.data);
//   }).catch((error) => {
//     console.log(error);
//   });
// }

// fetchData("Rick");

async function fetchData(name) {
  const url = `https://rickandmortyapi.com/api/character`;
  try {
    const res = await axios.get(url);
    const charData = res.data;
    showCharData(charData);
  } catch (error) {
    console.log(error);
  }
}

function showCharData(data) {
  console.log(data);
  const charName = document.createElement("h2");
  charName.innerText = data.name;
}


fetchData("Rick");