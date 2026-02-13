// ==============================
// APP CORE
// ==============================

let data = JSON.parse(localStorage.getItem("giorders_v2")) || {
    settings: {
        pin: "1926",
        dark: false
    },
    events: []
};

const app = document.getElementById("app");

function saveData() {
    localStorage.setItem("giorders_v2", JSON.stringify(data));
}

// ==============================
// INIT
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    renderHome(app, data);
});

// ==============================
// EVENTS
// ==============================

function createEvent() {

    const name = document.getElementById("evName").value.trim();
    const type = document.getElementById("evType").value;
    const price = parseFloat(document.getElementById("evPrice").value) || 0;
    const seats = parseInt(document.getElementById("evSeats").value) || 0;

    if (!name) {
        alert("Inserisci nome evento");
        return;
    }

    data.events.push({
        name,
        type,
        price,
        seats,
        orders: []
    });

    saveData();
    renderHome(app, data);
}
