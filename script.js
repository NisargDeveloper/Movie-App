// console.log("Lets make the movie app");
// function getData() {
//   fetch("https://api.github.com/users")
// .then(response => {
// 	return response.json();
// })
// .then(data => {
//   console.log(data);
// })
// }

// function printOn() {
//   let header = document.getElementById("header");
//   console.log(`This is the data inside the function 2 ${getData()}`)
// }

// printOn();

//Lets go baby
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
let search = document.getElementById("search");
let form = document.getElementById("form");

    console.log(search);
let valuetest = "spider"
let testing = SEARCHAPI + valuetest;

getDataNew(APIURL);
async function getDataNew(url) {
  let resp = await fetch(url);
  let data = await resp.json();

  console.log(data.results);
  //Will use it later
  main.innerHTML = "";
  data.results.forEach((movie) => {
    let moviesCollection = document.createElement("div");
    moviesCollection.id = "movies-collection";
    let main = document.getElementById("main");
    
    moviesCollection.innerHTML = 
    ` <img src="${IMGPATH + movie.backdrop_path}" id="images" class="images"> 
      <div class="written-text">
        <h1>${movie.original_title}</h1>
        <p class="para">${movie.vote_average}</p>
      </div>
      <div class="overview">${movie.overview}</div>
      `
      
    main.appendChild(moviesCollection);
    
  });
  for(i=0; i<= data.results.length; i++) {
    let paragraph = document.getElementsByClassName("para");
    if(data.results[i].vote_average <=7) {
      paragraph[i].style.color = 'yellow';
    }else if (data.results[i].vote_average <=6) {
      paragraph[i].style.color = 'red';
    }else {
      paragraph[i].style.color = '#00ff15';
    }
  }

  return data;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const searchTerm = search.value;
  const test = SEARCHAPI + searchTerm;
  if(searchTerm != "") {
    getDataNew(test);
  }else{
    getDataNew(APIURL);
  }
  
  
});





