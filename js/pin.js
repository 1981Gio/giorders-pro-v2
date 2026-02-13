// ==============================
// PIN MODULE
// ==============================

let tempPin = "";

function renderPinScreen() {
    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="pin-screen">
            <h1>GiOrders Pro</h1>
            <div id="pinDots" class="pin-dots">○ ○ ○ ○</div>

            <div class="keypad">
                ${[1,2,3,4,5,6,7,8,9].map(n => 
                    `<button onclick="pressPin(${n})">${n}</button>`
                ).join("")}
                <button onclick="clearPin()">C</button>
                <button onclick="pressPin(0)">0</button>
                <button onclick="checkPin()">OK</button>
            </div>
        </div>
    `;
}

function updateDots() {
    let dots = "";
    for (let i = 0; i < 4; i++) {
        dots += i < tempPin.length ? "● " : "○ ";
    }
    document.getElementById("pinDots").innerText = dots.trim();
}

function pressPin(n) {
    if (tempPin.length < 4) {
        tempPin += n;
        updateDots();
    }
}

function clearPin() {
    tempPin = "";
    updateDots();
}

function checkPin() {
    const data = loadData();

    if (tempPin === data.settings.pin) {
        renderHome();
    } else {
        clearPin();
        alert("PIN errato");
    }
}
