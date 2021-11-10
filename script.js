async function fetchData(character) {
  try {
    let url = await fetch(`https://rickandmortyapi.com/api/character`);
    let user = await response.json();
    newfunction();
  } catch (error) {
    console.error(error);
  }
}
