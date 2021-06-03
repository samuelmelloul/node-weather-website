const weatherForm = document.querySelector('form') 
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {

    //Prevent auto refresh after search
    e.preventDefault()

    msg1.textContent = "Loading...Please wait!"
    msg2.textContent = ""

    const location = search.value
    fetch('/weather?location=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                msg1.textContent = data.error
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecastData
            }
        })
    })
})