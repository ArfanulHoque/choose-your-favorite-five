const selectTable = [];


function display(cardPlayer) {
    const tableBody = document.getElementById('players-list');
    tableBody.innerHTML = '';

    for (let i = 0; i < cardPlayer.length; i++) {
        const name = selectTable[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;

        if (cardPlayer.length > 5) {
            alert('You are already selected 5 players')

        }
        else {
            tableBody.appendChild(tr);

        }
    }
}

function addToCart(element) {


    const playerName = element.parentNode.parentNode.children[0].innerText
    const playerSelect = {
        playerName: playerName
    }

    selectTable.push(playerSelect)
    display(selectTable);
}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('per-player-field');
    const newPerPlayerAmountString = perPlayerField.value;
    const newPerPlayerAmount = parseFloat(newPerPlayerAmountString);

    perPlayerField.value = '';




})
