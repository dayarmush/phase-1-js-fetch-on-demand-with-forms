const init = () => {
  const form = document.querySelector('form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('#searchByID');
    console.log(input.value)

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')
        console.log(title, summary)

        title.textContent = data.title
        summary.textContent = data.summary
    })
    // .catch(alert('this id is invalid'))
})
}

document.addEventListener('DOMContentLoaded', init);