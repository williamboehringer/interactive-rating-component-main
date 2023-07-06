document.getElementById('btn').addEventListener('click', changeCard);

function changeCard(e) {
    e.preventDefault();
    const getValue = document.querySelector('input[name="option"]:checked');
    const card = document.querySelector('.evaluation-card');
    const thanksCard = document.querySelector('.thanks-card');
    const message = document.querySelector('.message')

    card.style.display = 'none';
    thanksCard.style.display = 'flex';
    message.textContent = `You selected ${getValue.value} out of 5`
}

function selected (input) {
    const selected = document.getElementsByName('option')
    selected.forEach(option => {
        if (option !== input) {
            option.checked = false
        }
        else {
            option.checked = true
        }
    })
}

