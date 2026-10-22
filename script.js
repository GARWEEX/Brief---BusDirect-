const refrech = document.querySelector('#refrech');
const buyName = document.querySelector('#buyName');
const buySeat = document.querySelector('#buySeat');
const buyBtn = document.querySelector('#buyBtn');
const sieges = document.querySelectorAll('.sieg');

refrech.addEventListener('submit', function(e) {
    e.preventDefault();
});

buyBtn.addEventListener('click', function() {
    const nom = buyName.value;
    const num = buySeat.value;

    if (nom !== '') {
        sieges.forEach(function(element) {
            if (element.textContent == num) {
                element.innerHTML = num + '<br><span>' + nom + '</span>';
                element.style.backgroundColor = 'red';
                element.style.color = 'white';
            }
        });
        buyName.value = '';
    }
});