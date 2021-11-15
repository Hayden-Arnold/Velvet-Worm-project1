# Project Overview

## Project Name
Rick and Morty Character Sheet.

## Project Description

An application that uses an API to return Character data on Rick and Morty characters. (Name, picture, and whether they are alive or dead.)

## API and Data Sample

```
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
```

## Wireframes
Desktop Wireframe: 
https://imgur.com/JkUcmg1

Mobile Wireframe:
https://imgur.com/m6wHbve

### MVP/PostMVP

#### MVP 

- Find and use an external api for Rick and Morty characters.

- Allow user to look up characters using a search bar.

- Render data on page after a search button has been used.

#### PostMVP  

- Add styling to my page.

- Add links to my socials.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Nov 8| Home Tab / More R&M Tab / Wiki Tab | Complete
|Nov 9| Portal / search bar / search button | Complete
|Nov 10| Character picture / Character name/ Character status | Complete
|Nov 11| Github link / Linkden link /  | Complete
|Nov 12| Bottom bar / Title / Background | Complete

## Priority Matrix

https://imgur.com/QGg43ZP

https://imgur.com/39cbe1L

## Timeframes

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: |
| Home Tab | H | 2hrs| 1hrs |
| More R&M Tab | H | 2hrs| 1hrs |
| Wiki Tab | H | 2hrs| 1hrs |
| Portal image and search bar | H | 4hrs| 7hrs |
| search button | H | 4hrs| 4hrs |
| Character picture | H | 4hrs| 3hrs |
| Character name | H | 3hrs| 3hrs |
| Character status | M | 3hrs| 3hrs |
| Github link | M | 3hrs| 3hrs |
| Linkden link | M | 3hrs| 3hrs |
| Bottom bar: | M | 3hrs| 3hrs |
| Title | H | 3hrs| 3hrs |
| Background image | L | 3hrs| 3hrs |
| Total | H | 39hrs| 38hrs |

## Code Snippet

```
let searchform = document.querySelector(".search-section");
searchform.addEventListener("submit", (event) => {
  event.preventDefault()
  let name = searchInput.value
  fetchData(name);
});
```

## Change Log

No changes were made from my intended project idea. I scoped my project well and hit the T I wanted to hit on this project!

## Link to Deployed Site

https://hayden-arnold.github.io/Velvet-Worm-project1/