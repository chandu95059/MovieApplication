let API = 'http://www.omdbapi.com/?i=tt3896198&apikey=98e345d&t=';
let loadingstatus = false
let img = document.getElementById('movie-img')
let title = document.getElementById('movie-title')
let desc = document.getElementById('movie-desc')
let genre = document.getElementById('value genre')
let ratings = document.getElementById('value imbd-ratings')
let actors = document.getElementById('value actors')
let director = document.getElementById('value director')
let awards = document.getElementById('value awards')
let collections = document.getElementById('value collections')
let year = document.getElementById('value year')
let movieContainer = document.getElementById('movie-container')
let errorContainer = document.getElementById('error-container')
movieContainer.style.display = 'none'
errorContainer.style.display = 'none'



function fetchmovieDetails() {
  loadingstatus = true
  document.getElementById('loader').style.display = 'block'
  checkLoaderStatus()
  let movieName = document.getElementById('movieName')
  let apiQuery = API + movieName.value;
  fetch(apiQuery).then((response) => {
    return response.json()
  }).then((data) => {
    if (data.Error != 'Movie not found!') {
      console.log(data)
      loadingstatus = false
      checkLoaderStatus()
      img.src = data.Poster;
      title.innerText = data.Title
      desc.innerText = data.Plot
      genre.innerText = data.Genre
      ratings.innerText = data.imdbRating
      actors.innerText = data.Actors
      director.innerText = data.Director
      awards.innerText = data.Awards
      collections.innerText = data.BoxOffice
      year.innerText = data.Year
      movieContainer.style.display = 'block'
      movieContainer.style.display = 'flex'
      errorContainer.style.display = 'none'
    }else{
      movieContainer.style.display = 'none'
      errorContainer.style.display = 'block'
      document.getElementById('loader').style.display = 'none'
    }
  })
}

function checkLoaderStatus() {
  let intro = document.getElementById('intro')
  intro.style.display = 'none'
  let loader = document.getElementById('loader')
  if (loadingstatus == true) {
    loader.classList.add('loader')
  } else {
    loader.classList.remove('loader')
  }
}


// function searchmoviedet(){
//   loader();
// }