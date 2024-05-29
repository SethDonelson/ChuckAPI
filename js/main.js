
document.querySelector('.jokeButton1').addEventListener('click', getJoke)
document.querySelector('.jokeButton2').addEventListener('click', getJoke)

function getJoke(){

fetch("https://api.chucknorris.io/jokes/random")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data.value)

  document.querySelector('h2').innerText = data.value
})

.catch(err => {
    console.log(`error ${err}`)
});

}