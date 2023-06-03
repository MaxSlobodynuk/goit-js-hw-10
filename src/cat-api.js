export { fetchBreeds, fetchCatByBreed };

import Notiflix from 'notiflix';


// const API_KEY = 'live_CF1MuFbgwBmR9DQW2Dhf8ryHOYiUpeoIMTziOKSLT6fOFLQ5E9H2tISVIrmkxlNc';
// const BASE_URL = 'https://api.thecatapi.com/v1';
// const SECOND_URL = 'https://api.thecatapi.com/v1/images/search';


const API_KEY = 'live_CF1MuFbgwBmR9DQW2Dhf8ryHOYiUpeoIMTziOKSLT6fOFLQ5E9H2tISVIrmkxlNc';
const BASE_URL = 'https://api.thecatapi.com/v1';
const SECOND_URL = 'https://api.thecatapi.com/v1/images/search';

async function fetchBreeds() {
  try {const resp = await fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`);
  const result = await resp.json();
  if (!resp.ok) {
    Notiflix.Notify.warning(resp.statusText);}
  return result;
    
  } catch (error) {
    console.log(error);
  }
}

async function fetchCatByBreed(breedId){
  try {
    const resp = await fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`);
  const result = await resp.json();
  if (!resp.ok) {
    resp.statusText;
  }
  return result;
  } catch (error) {
    console.log(error);
  }
}

// function fetchBreeds() {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//     .then(resp => {
//         if (!resp.ok) {
//             Notiflix.Notify.warning(resp.statusText);
//         }
//         return resp.json();
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// function fetchCatByBreed(breedId) {
//     return fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`)
//     .then(resp => {
//         if (!resp.ok) {
//             Notiflix.Notify.warning(resp.statusText);
//     }
//         return resp.json();
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

// ----------------------------------------

// function fetchBreeds() {
//     return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
//     .then(resp => {
//         // console.log(resp)
//         if (!resp.ok) {
//             Notiflix.Notify.warning(resp.statusText)
//         }

//         return resp.json()
//     })
// }
// fetchBreeds().catch(err => console.log(err))


// function fetchCatByBreed(breedId) {
//     return fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`)
//     .then(resp => {
//         // console.log(resp)
//         if (!resp.ok) {
//             throw new Error(resp.statusText)
//         }

//         return resp.json()
//     })
// }
// fetchCatByBreed().catch(err => console.log(err))

// -----------------------------------------

// async function fetchBreeds() {
//   try {const resp = await fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`);
//   const result = await resp.json();
//   if (!resp.ok) {
//     Notiflix.Notify.warning(resp.statusText);}
//   return result;
    
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function fetchCatByBreed(breedId){
//   try {
//     const resp = await fetch(`${SECOND_URL}?api_key=${API_KEY}&breed_ids=${breedId}`);
//   const result = await resp.json();
//   if (!resp.ok) {
//     resp.statusText;
//   }
//   return result;
//   } catch (error) {
//     console.log(error);
//   }  
// }

