const btn = document.getElementById('submit--btn')
//inputs
// const name = document.getElementById('name')
// const description = document.getElementById('description')
// const category = document.getElementById('category')
// const imageUrl = document.getElementById('imageUrl')


const formHandler = (ev) => {
    ev.preventDefault()

    const objToPost = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
        imageUrl: document.getElementById('imageUrl').value
    }

    fetch('https://striveschool-api.herokuapp.com/api/movies/', {
        method: 'POST',
        body: JSON.stringify(objToPost),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
        }
    })
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData)
    })
    .catch(err => {
        console.log(err)
    })
}

// const formHandler = async (ev) => {
//     ev.preventDefault()

//     const objToPost = {
//         name: document.getElementById('name').value,
//         description: document.getElementById('description').value,
//         category: document.getElementById('category').value,
//         imageUrl: document.getElementById('imageUrl').value
//     }

//     const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/', {
//         method: 'POST',
//         body: JSON.stringify(objToPost),
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
//         }
//     })

//     if (response.ok) {
//         const resJson = await response.json()
//         console.log(resJson)

//         alert('YEEEEE')
//     } else {
//         console.log('nope')
//     }
// }