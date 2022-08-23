// list added
const selectTable = [];

function display(cardPlayer) {
    if (cardPlayer.length > 5) {
        alert('Already selected five')
        return;
    }
    const tableBody = document.getElementById('players-list');
    tableBody.textContent = '';

    for (let i = 0; i < cardPlayer.length; i++) {
        const name = selectTable[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }

}
function arrLentgh() {
    const playeradd = selectTable.length;
    if (playeradd > 5) {
        return
    }
    return playeradd;
}

function getInputFieldByID(inputId) {
    const inputFieldId = document.getElementById(inputId);
    const inputFieldString = inputFieldId.value;
    const inputField = parseFloat(inputFieldString);

    inputFieldId.value = '';
    return inputField;
}

function addToCart(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText
    const playerSelect = {
        playerName: playerName
    }

    selectTable.push(playerSelect)
    display(selectTable);

    arrLentgh()
}

// Player Expenses
document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputField = getInputFieldByID('per-player-field')
    const playeSelect = arrLentgh();
    const totalPlayerExpenses = inputField * playeSelect;
    const setValue = document.getElementById('player-expenses');
    setValue.innerText = totalPlayerExpenses
})


// Manager and Coach Expenses
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerExpenses = getInputFieldByID('manager-field');
    const coachExpenses = getInputFieldByID('coach-field');
    const totalPlayerExpenses = document.getElementById('player-expenses');


})



