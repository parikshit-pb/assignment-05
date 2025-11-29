console.log('hello js')


// document.getElementById('btn-call').addEventListener("click", function(){
//     alert('call kore daw')
// })

const hearts = document.querySelectorAll('.heart-btn');
const count = document.getElementById('heart-count')

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        count.textContent = parseInt(count.textContent) + 1;
        heart.classList.toggle('fa-solid')
        heart.classList.toggle('fa-regular')
    });
});

// coin add

let coins = 100
function updateCoin () {
    document.getElementById('coin-box').textContent = coins;
}

const callButtons = document.querySelectorAll('.call-btn')
const historyList = document.getElementById('history-list')

callButtons.forEach(button => {
    button.addEventListener('click', function () {

        const serviceName = this.getAttribute("data-name");
        const serviceNumber = this.getAttribute("data-number")

    if (coins < 20) {
        alert("You have less than  20 coins. You can not make a call");
        return;
    }

    alert('calling ${serviceName} at ${serviceNumber}');

    coins -= 20;
    updateCoin();

    })
})