const selectTable = [];

function display(cardPlayer) {
    // console.log(cardPlayer);
    const tableBody = document.getElementById('players-list');
    tableBody.innerHTML = '';

    for (let i = 0; i < cardPlayer.length; i++) {
        // console.log(selectTable[i].playerName);
        const name = selectTable[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);

    }
}

function addToCart(element) {
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);

    const playerName = element.parentNode.parentNode.children[0].innerText
    // console.log(playerName);

    const playerSelect = {
        playerName: playerName
    }
    selectTable.push(playerSelect)

    // console.log(selectTable);
    // console.log(selectTable.length);

    display(selectTable);
}