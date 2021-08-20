const container = document.getElementById('movie--row')


//hard coding it 💥
const getMovies = () => {
    fetch('https://striveschool-api.herokuapp.com/api/movies/Horror', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
        }
    })
    .then(response => response.json())
    .then(jsonData => {
        console.log('The movie categories are: ',jsonData)
        displayMovies(jsonData)
    })
}

//array di categories
const displayMovies = (categories) => {
    categories.forEach(category => {
        container.innerHTML += `
        <a href="backoffice.html?movieId=${category._id}">
          <img class="pr-1 pr-md-2 pb-md-2" 
           src=${category.imageUrl} alt=${category.name}/>
        </a>`
    });
}

window.onload = () => {
    getMovies()
}