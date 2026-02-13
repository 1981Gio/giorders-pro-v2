// ============================
// EVENTS MODULE
// ============================

function handleCreateEvent() {

    const name = document.getElementById("evName").value.trim();
    const type = document.getElementById("evType").value;
    const price = parseFloat(document.getElementById("evPrice").value) || 0;
    const seats = parseInt(document.getElementById("evSeats").value) || 0;

    if (!name) {
        alert("Inserisci nome evento");
        return;
    }

    const newEvent = {
        id: Date.now(),
        name,
        type,
        price,
        seats,
        orders: []
    };

    data.events.push(newEvent);
    saveData();
    renderHome(app, data);
}