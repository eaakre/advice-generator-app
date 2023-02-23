let adviceContainer = document.getElementById('advice');
let idNumber = document.getElementById('id-num');
// let divider = document.getElementById('divider')

function getData() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            return response.json();
        }).then(adviceData => {
            const adviceObject = adviceData.slip;
            adviceContainer.innerHTML = `"${adviceObject.advice}"`
            idNumber.innerHTML = adviceObject.id
            console.log(adviceObject)
        }).catch(error => {
            console.log(error);
        });
}